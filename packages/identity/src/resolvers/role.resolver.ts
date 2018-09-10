import { RoleController } from "../controllers/role.controller";
import { RoleModel } from "../models/role.model";
import { organization } from "./organization.resolver";

const role = new RoleController(RoleModel);

export default {
  Mutation: {
    createRole: async (_: any, params: any) => {
      // Create role
      const newRole = await role.create({
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
  },
  Query: {
    getRole: async (_: any, params: any) => await role.get(params.id)
  }
};

export { role };
