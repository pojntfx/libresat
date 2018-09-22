import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { user } from "../resolvers/user.resolver";
import { role } from "../resolvers/role.resolver";
import { assign } from "../utils/assign";
import { AccessToScopeNotConfiguredOrIncorrectCredentialsError } from "../errors/AccessToScopeNotConfiguredOrIncorrectCredentials.error";

class ScopeController extends Controller {
  async assignUser(params: any) {
    const { scopeId, userId } = params;

    const scopeToAssignUserTo = await assign(
      this,
      scopeId,
      "users",
      user,
      userId,
      "scopes"
    );

    return scopeToAssignUserTo;
  }

  async assignRole(params: any) {
    const { scopeId, roleId } = params;

    const scopeToAssignRoleTo = await assign(
      this,
      scopeId,
      "roles",
      role,
      roleId,
      "scopes"
    );

    return scopeToAssignRoleTo;
  }

  getWithRoles = async (id: string) =>
    this.model.findById(id).populate("roles");

  getAllUsers = async (parent: any) =>
    (await this.model.findById(parent.id).populate("users")).users;

  getAllRoles = async (parent: any) =>
    (await this.model.findById(parent.id).populate("roles")).roles;

  async delete(params: any) {
    const { id: scopeId } = params;
    try {
      await user.auth({
        ...params,
        scopeId,
        validRolesNames: ["WRITE:SCOPE"]
      });
      // Remove the scope from all users that have it
      const usersWithRoleIds = (await this.get(scopeId)).users;
      for (let usersWithRoleId of usersWithRoleIds) {
        const newScopes = (await user.get(usersWithRoleId)).scopes.filter(
          (usersScopeId: any) => usersScopeId.toString() !== scopeId
        );
        if (newScopes.length > 0) {
          await user.updateScopes(usersWithRoleId, newScopes);
        }
      }
      const deletedScope = await this.get(scopeId);
      console.log(deletedScope);
      // Delete the scope
      await super.delete(scopeId);
      return deletedScope;
    } catch (e) {
      throw new AccessToScopeNotConfiguredOrIncorrectCredentialsError(e);
    }
  }
}

export { ScopeController };
