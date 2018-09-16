import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { user } from "../resolvers/user.resolver";
import { role } from "../resolvers/role.resolver";
import { assign } from "../utils/assign";

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
}

export { ScopeController };
