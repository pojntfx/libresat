import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { hash } from "bcryptjs";
import { assign } from "../utils/assign.util";
import { role } from "../resolvers/role.resolver";
import { authenticate } from "../utils/authenticate.util";
import { authorize } from "../utils/authorize.util";
import { scope } from "../resolvers/scope.resolver";
import { IUserController, IUserCreateParams } from "../types/user.type";
import { WRITE_SELF } from "../constants/roles.constants";
import { parseCredentials } from "../utils/parseCredentials.util";
import { createUserWithScopeAndRole } from "../utils/createUserWithScopeAndRole.util";
import { assignRoleAndScopeToUser } from "../utils/assignRolesAndScopesToUser.util";

class UserController extends Controller implements IUserController {
  create = async (params: IUserCreateParams) =>
    await hash(params.password, 10)
      .then(encryptedPassword =>
        createUserWithScopeAndRole(
          params => super.create(params),
          params.name,
          encryptedPassword
        )
      )
      .then(documents => {
        assignRoleAndScopeToUser(
          documents.userId,
          documents.writeSelfRoleId,
          documents.userScopeId
        );
        return documents.user;
      });

  async update(params: any) {
    // TODO: Decompose and "de-variable-lize"
    const { userId } = await parseCredentials(params);
    const user = await this.get(userId);
    const userScope = (await this.getWithScopes(userId)).scopes.find(
      (scope: any) => scope.name === user.id
    );

    // Check if user is a) authenticated and b) authorized to change himself
    await this.auth({
      ...params,
      scopeId: userScope.id,
      validRolesNames: [WRITE_SELF]
    });
    // TODO: Throw error (duplicate user name)
    // Update user itself
    return await super.update(userId, {
      name: params.newName,
      password: await hash(params.newPassword, 10)
    });
  }

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

  private getWithScopes = async (id: string) =>
    this.model.findById(id).populate("scopes");

  private getWithRoles = async (id: string) =>
    this.model.findById(id).populate("roles");
}

export { UserController };
