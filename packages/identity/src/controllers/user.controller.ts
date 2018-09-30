import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { hash } from "bcryptjs";
import { assign } from "../utils/assign";
import { role } from "../resolvers/role.resolver";
import { authenticate } from "../utils/authenticate";
import { authorize } from "../utils/authorize";
import { scope } from "../resolvers/scope.resolver";
import { parseCredentials } from "../utils/parseCredentials";
import { IUserController, IUser, IUserCreateParams } from "../types/user.type";
import { assignRoleAndScopeToUser } from "../utils/assignRolesAndScopesToUser";

class UserController extends Controller implements IUserController {
  async create(params: IUserCreateParams) {
    const { password } = params;

    const encryptedPassword = await hash(password, 10);

    const user: IUser = await super.create({
      ...params,
      password: encryptedPassword
    });

    // Create a scope for each user so that they can edit themselves
    const { id: userScopeId } = await scope.create({
      name: user.id,
      isMeta: true
    });
    const { id: writeSelfRoleId } = await role.create({
      name: "WRITE:SELF",
      isMeta: true
    });

    await assignRoleAndScopeToUser(user.id, writeSelfRoleId, userScopeId);

    return user;
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

  async update(params: any) {
    const { userId } = await parseCredentials(params);
    const user = await this.get(userId);
    const userScope = (await this.getWithScopes(userId)).scopes.find(
      (scope: any) => scope.name === user.id
    );

    // Check if user is a) authenticated and b) authorized to change himself
    await this.auth({
      ...params,
      scopeId: userScope.id,
      validRolesNames: ["WRITE:SELF"]
    });

    // Update name for scope
    await scope.update({ ...params, name: params.newName });
    // Update user itself
    return await super.update(userId, {
      name: params.newName,
      password: await hash(params.newPassword, 10)
    });
  }

  async delete(params: any) {
    const { userId } = await parseCredentials(params);
    const user = await this.get(userId);
    const userScope = (await this.getWithScopes(userId)).scopes.find(
      (scope: any) => scope.name === user.id
    );
    const userRole = (await this.getWithRoles(userId)).roles.find(
      (role: any) => role.name === "WRITE:SELF"
    );

    // Check if user is a) authenticated and b) authorized to change himself
    await this.auth({
      ...params,
      scopeId: userScope,
      validRolesNames: ["WRITE:SELF"]
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
