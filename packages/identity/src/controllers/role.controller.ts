import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { organization } from "../resolvers/organization.resolver";
import { user } from "../resolvers/user.resolver";

class RoleController extends Controller {
  async create(params: any) {
    // Create role
    const newRole = await super.create({
      name: params.name
    });
    // Get organization to which this role belongs to
    const ownerOrganization = await organization.get(params.organizationId);
    // Assign role to organization
    newRole.organization = ownerOrganization;
    // Save the role
    await newRole.save();
    // Assign organization to role
    ownerOrganization.roles.push(newRole);
    // Save the organization
    await ownerOrganization.save();
    return newRole;
  }

  getOrganization = async (parent: any) =>
    await this.get(parent.id).then(
      async (role: any) => await organization.get(role.organization._id)
    );

  getAllUsers = async (parent: any) =>
    await this.get(parent.id).then(async (role: any) =>
      role.users.map((userId: string) => user.get(userId))
    );
}

export { RoleController };
