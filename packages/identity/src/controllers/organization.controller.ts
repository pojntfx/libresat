import { GraphQLMongoDBController as Controller } from "@libresat/service";

class OrganizationController extends Controller {
  async assignUser(params: any) {
    console.log(
      `Assigning user ${params.userId} to organization ${params.organizationId}`
    );
  }

  async assignRole(params: any) {
    console.log(
      `Assigning role ${params.roleId} to organization ${params.organizationId}`
    );
  }
}

export { OrganizationController };
