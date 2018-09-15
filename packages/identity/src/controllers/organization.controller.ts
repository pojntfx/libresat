import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { role } from "../resolvers/role.resolver";

class OrganizationController extends Controller {
  getAllRoles = async (parent: any) =>
    await this.get(parent.id).then(org =>
      org.roles.map(async (roleId: string) => await role.get(roleId))
    );

  filter = async (params: any) => super.filter(params.filter || undefined);

  getAllByName = async (name: string) =>
    await this.model
      .find({
        name
      })
      .populate("roles");

  async filterRolesByNames(name: string, roleNames: [string]) {
    const orgsThatMatchName = await this.getAllByName(name);
    let authorizedRoles = [];
    for (let roleName of roleNames) {
      for (let org of orgsThatMatchName) {
        for (let role of org.roles) {
          if (role.name === roleName) {
            authorizedRoles.push(role);
          }
        }
      }
    }
    return authorizedRoles;
  }
}

export { OrganizationController };
