import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { assign } from "../utils/assign.util";
import { role } from "../resolvers/role.resolver";
import { authenticate } from "../utils/authenticate.util";
import { authorize } from "../utils/authorize.util";
import { scope } from "../resolvers/scope.resolver";
import {
  IUserController,
  IUserCreateParams,
  IUserUpdateParams,
  IUserDeleteParams,
  IUserAuthParams,
  IUserAssignRoleParams
} from "../types/user.type";
import { parseCredentials } from "../utils/parseCredentials.util";
import { createUserWithScopeAndRole } from "../utils/createUserWithScopeAndRole.util";
import { assignRoleAndScopeToUser } from "../utils/assignRolesAndScopesToUser.util";
import { getUserScope } from "../utils/getUserScope.util";
import { authenticateUserInUserScope } from "../utils/authenticateUserInUserScope.util";
import { updateUserById } from "../utils/updateUserById.util";
import { hashPassword } from "../utils/hashPassword.util";
import { CouldNotUpdateUserError } from "../errors/CouldNotUpdateUser.error";
import { CouldNotCreateUserError } from "../errors/CouldNotCreateUser.error";
import { deleteUserWithScopeAndRole } from "../utils/deleteUserWithScopeAndRole.util";
import { getUserRole } from "../utils/getUserRole.util";
import { CouldNotDeleteUserError } from "../errors/CouldNotDeleteUser.error";
import { CouldNotAuthUserError } from "../errors/CouldNotAuthUser.error";
import { CouldNotAssignRoleToUserError } from "../errors/CouldNotAssignRoleToUser.error";

class UserController extends Controller implements IUserController {
  /**
   * Create a user
   */
  create = async (params: IUserCreateParams) =>
    hashPassword(params.password)
      .then(hashedPassword =>
        // Create a user plus their scope and role to manage them
        createUserWithScopeAndRole(
          params.name,
          hashedPassword,
          properties => super.create(properties),
          properties => scope.create(properties),
          properties => role.create(properties)
        )
      )
      .then(({ user, userId, writeSelfRoleId, userScopeId }) => {
        // Assign the management scope and role to the user
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
  updateWithCredentials = async (params: IUserUpdateParams) =>
    // Get user id
    parseCredentials(params)
      .then(({ userId }) =>
        // Get user's scope
        getUserScope(userId, id => this.get(id), id => this.getWithScopes(id))
      )
      .then(({ id }) =>
        // Check if the user is authenticated in it's scope
        authenticateUserInUserScope(
          credentials => this.auth(credentials),
          id,
          params
        )
      )
      .then(({ id }) =>
        // Update the user with the new parameters
        updateUserById(
          id,
          params.newName,
          params.newPassword,
          (id, properties) => super.update(id, properties)
        )
      )
      .catch(e => new CouldNotUpdateUserError(e));

  /**
   * Delete a user
   */
  deleteWithCredentials = (params: IUserDeleteParams) =>
    parseCredentials(params)
      .then(async ({ userId }) =>
        // Get user's scope id
        ({
          userScopeId: (await getUserScope(
            userId,
            id => this.get(id),
            id => this.getWithScopes(id)
          )).id
        })
      )
      // Check if user is authenticated
      .then(async ({ userScopeId }) => ({
        userScopeId,
        userId: (await authenticateUserInUserScope(
          credentials => this.auth(credentials),
          userScopeId,
          params
        )).id
      }))
      // Get user's role id
      .then(async ({ userId, ...otherIds }) => ({
        ...otherIds,
        userId,
        userRoleId: (await getUserRole(userId, id => this.getWithRoles(id))).id
      }))
      // Delete user, it's role and scope
      .then(({ userId, userRoleId, userScopeId }) =>
        deleteUserWithScopeAndRole(
          userId,
          userScopeId,
          userRoleId,
          id => role.delete(id),
          id => scope.delete(id),
          id => this.delete(id)
        )
      )
      .catch(e => new CouldNotDeleteUserError(e));

  /**
   * Authenticate and authorize a user
   */
  auth = async (params: IUserAuthParams) =>
    parseCredentials(params)
      .then(async ({ userId, password }) => {
        await this.authenticate(userId, password);
        return { userId };
      })
      .then(({ userId }) =>
        this.authorize(userId, params.scopeId, params.validRolesNames)
      )
      .catch(e => new CouldNotAuthUserError(e));

  /**
   * Assign role to a user
   */
  assignRole = async (params: IUserAssignRoleParams) =>
    assign(this, params.userId, "roles", role, params.roleId, "users").catch(
      e => new CouldNotAssignRoleToUserError(e)
    );

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
