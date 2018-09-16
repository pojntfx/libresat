import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { hash } from "bcryptjs";
import { assign } from "../utils/assign";
import { role } from "../resolvers/role.resolver";
import { authenticate } from "../utils/authenticate";
import { authorize } from "../utils/authorize";
import { scope } from "../resolvers/scope.resolver";
import { parseCredentials } from "../utils/parseCredentials";

class UserController extends Controller {
  async create(params: any) {
    const { password } = params;

    const encryptedPassword = await hash(password, 10);

    const user = await super.create({
      ...params,
      password: encryptedPassword
    });

    // Create a scope for each user so that they can edit themselves
    const { id: userScopeId } = await scope.create({ name: params.name });
    const { id: writeSelfRoleId } = await role.create({ name: "WRITE:SELF" });

    await scope.assignUser({
      scopeId: userScopeId,
      userId: user.id
    });

    await this.assignRole({
      userId: user.id,
      roleId: writeSelfRoleId
    });

    await scope.assignRole({
      scopeId: userScopeId,
      roleId: writeSelfRoleId
    });

    return user;
  }

  async assignRole(params: any) {
    const { userId, roleId } = params;

    const scopeToAssignRoleTo = await assign(
      this,
      userId,
      "roles",
      role,
      roleId,
      "users"
    );

    return scopeToAssignRoleTo;
  }

  async auth(params: any) {
    const { userId, password } = await parseCredentials(params);
    await this.authenticate(userId, password);
    return await this.authorize({ ...params, userId });
  }

  async update(params: any) {
    const { userId } = await parseCredentials(params);
    const user = await this.get(userId);
    const userScopeId = (await this.getWithScopes(userId)).scopes.filter(
      (scope: any) => scope.name === user.name
    );

    // Check if user is a) authenticated and b) authorized to change himself
    await this.auth({
      ...params,
      scopeId: userScopeId,
      validRolesNames: ["WRITE:SELF"]
    });

    return await super.update(userId, {
      name: params.newName,
      password: await hash(params.newPassword, 10)
    });
  }

  async authenticate(userId: string, password: string) {
    return await authenticate(this, userId, password);
  }

  async authorize(params: any) {
    const { userId, scopeId, validRolesNames } = params;
    await authorize(userId, scope, scopeId, validRolesNames);
    return await this.get(userId);
  }

  getWithScopes = async (id: string) =>
    this.model.findById(id).populate("scopes");
}

export { UserController };
