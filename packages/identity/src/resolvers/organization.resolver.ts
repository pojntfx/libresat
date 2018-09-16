import { OrganizationController } from "../controllers/organization.controller";
import { OrganizationModel } from "../models/organization.model";

const organization = new OrganizationController(OrganizationModel);

export default {
  Organization: {},
  Mutation: {
    assignUserToOrganization: async (_: any, params: any) =>
      await organization.assignUser(params),
    assignRoleToOrganization: async (_: any, params: any) =>
      await organization.assignRole(params),
    createOrganization: async (_: any, params: any) =>
      await organization.create(params)
  }
};

export { organization };
