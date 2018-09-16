import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { user } from "../resolvers/user.resolver";
import { role } from "../resolvers/role.resolver";
import { assign } from "../utils/assign";

class OrganizationController extends Controller {
  async assignUser(params: any) {
    const { organizationId, userId } = params;

    const organizationToAssignUserTo = await assign(
      this,
      organizationId,
      "users",
      user,
      userId,
      "organizations"
    );

    return organizationToAssignUserTo;
  }

  async assignRole(params: any) {
    const { organizationId, roleId } = params;

    const organizationToAssignRoleTo = await assign(
      this,
      organizationId,
      "roles",
      role,
      roleId,
      "organizations"
    );

    return organizationToAssignRoleTo;
  }
}

export { OrganizationController };
