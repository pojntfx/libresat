import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { role } from "../resolvers/role.resolver";

class OrganizationController extends Controller {
  getAllRoles = async (parent: any) =>
    await this.get(parent.id).then(org =>
      org.roles.map(async (id: string) => await role.get(id))
    );
}

export { OrganizationController };
