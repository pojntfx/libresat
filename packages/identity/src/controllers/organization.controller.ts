import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { role } from "../resolvers/role.resolver";

class OrganizationController extends Controller {
  getAllRoles = async (parent: any) =>
    await this.get(parent.id).then(org =>
      org.roles.map(async (roleId: string) => await role.get(roleId))
    );

  filter = async (params: any) => super.filter(params.filter || undefined);
}

export { OrganizationController };
