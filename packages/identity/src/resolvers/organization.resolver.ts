import { OrganizationController } from "../controllers/organization.controller";
import { OrganizationModel } from "../models/organization.model";

const organization = new OrganizationController(OrganizationModel);

export default {
  Mutation: {
    createOrganization: async (_: any, params: any) =>
      await organization.create(params)
  },
  Query: {
    organization: async (_: any, params: any) =>
      await organization.get(params.id)
  },
  Organization: {
    roles: async (parent: any) => await organization.getAllRoles(parent)
  }
};

export { organization };
