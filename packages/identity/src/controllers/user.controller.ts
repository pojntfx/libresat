import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { assign } from "../utils/assign.util";
import { role } from "../resolvers/role.resolver";
import { authenticate } from "../utils/authenticate.util";
import { authorize } from "../utils/authorize.util";
import { scope } from "../resolvers/scope.resolver";
import {
  IUserController,
  IUserCreateParams,
  IUserUpdateParams
} from "../types/user.type";
import { WRITE_SELF } from "../constants/roles.constants";
import { parseCredentials } from "../utils/parseCredentials.util";
import { createUserWithScopeAndRole } from "../utils/createUserWithScopeAndRole.util";
import { assignRoleAndScopeToUser } from "../utils/assignRolesAndScopesToUser.util";
import { getUserScope } from "../utils/getUserScope.util";
import { authenticateUserInUserScope } from "../utils/authenticateUserInUserScope.util";
import { updateUserById } from "../utils/updateUserById.util";
import { hashPassword } from "../utils/hashPassword.util";
import { CouldNotUpdateUserError } from "../errors/CouldNotUpdateUser.error";
import { CouldNotCreateUserError } from "../errors/CouldNotCreateUser.error";

class UserController extends Controller implements IUserController {
  /**
   * Create a user
   */
  create = async (params: IUserCreateParams) =>
    hashPassword(params.password)
      .then(hashedPassword =>
        createUserWithScopeAndRole(
          params.name,
          hashedPassword,
          properties => super.create(properties),
          properties => scope.create(properties),
          properties => role.create(properties)
        )
      )
      .then(({ user, userId, writeSelfRoleId, userScopeId }) => {
        assignRoleAndScopeToUser(
          userId,
          writeSelfRoleId,
          userScopeId,
          userAndRole => scope.assignUser(userAndRole),
          roleAndUser => this.assignRole(roleAndUser),
          roleAndScope => scope.assignRole(roleAndScope)
        );
        return user;
      })
      .catch(e => new CouldNotCreateUserError(e));

  /**
   * Update a user
   */
  update = async (_: any, params: IUserUpdateParams) =>
    parseCredentials(params)
      .then(({ userId }) => getUserScope(this, userId))
      .then(({ id }) => authenticateUserInUserScope(this, id, params))
      .then(({ id }) =>
        updateUserById(
          (id, properties) => super.update(id, properties),
          id,
          params.newName,
          params.newPassword
        )
      )
      .catch(e => new CouldNotUpdateUserError(e));

  async assignRole(params: any) {
    const { userId, roleId } = params;

    const userToAssignRoleTo = await assign(
      this,
      userId,
      "roles",
      role,
      roleId,
      "users"
    );

    return userToAssignRoleTo;
  }

  async auth(params: any) {
    const { userId, password } = await parseCredentials(params);
    const { scopeId, validRolesNames } = params;
    await this.authenticate(userId, password);
    return await this.authorize(userId, scopeId, validRolesNames);
  }

  async delete(params: any) {
    const { userId } = await parseCredentials(params);
    const user = await this.get(userId);
    const userScope = (await this.getWithScopes(userId)).scopes.find(
      (scope: any) => scope.name === user.id
    );
    const userRole = (await this.getWithRoles(userId)).roles.find(
      (role: any) => role.name === WRITE_SELF
    );

    // Check if user is a) authenticated and b) authorized to change himself
    await this.auth({
      ...params,
      scopeId: userScope,
      validRolesNames: [WRITE_SELF]
    });

    // Delete role, scope and user
    await role.delete(userRole.id);
    await scope.delete(userScope.id);
    return await super.delete(userId);
  }

  getAllRoles = async (parent: any) =>
    (await this.model.findById(parent.id).populate("roles")).roles;

  getAllScopes = async (parent: any) =>
    (await this.model.findById(parent.id).populate("scopes")).scopes;

  async updateScopes(id: string, scopes: any) {
    const userToUpdate = await this.model.findById(id);
    userToUpdate.scopes = scopes;
    userToUpdate.save();
  }

  private async authenticate(userId: string, password: string) {
    return await authenticate(this, userId, password);
  }

  private async authorize(
    userId: string,
    scopeId: string,
    validRolesNames: string[]
  ) {
    await authorize(userId, scope, scopeId, validRolesNames);
    return await this.get(userId);
  }

  getWithScopes = async (id: string) =>
    this.model.findById(id).populate("scopes");

  private getWithRoles = async (id: string) =>
    this.model.findById(id).populate("roles");
}

export { UserController };
