import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { organization } from "../resolvers/organization.resolver";
import { role } from "../resolvers/role.resolver";

class OrganizationController extends Controller {
  getAllRoles = async (parent: any) =>
    await organization
      .get(parent.id)
      .then(org => org.roles.map((id: string) => role.get(id)));
}

export { OrganizationController };
