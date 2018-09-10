import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { organization } from "../resolvers/organization.resolver";

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
}

export { RoleController };
