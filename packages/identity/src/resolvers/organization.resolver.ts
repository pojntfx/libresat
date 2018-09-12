import { OrganizationController } from "../controllers/organization.controller";
import { OrganizationModel } from "../models/organization.model";

const organization = new OrganizationController(OrganizationModel);

export default {
  Mutation: {
    createOrganization: async (_: any, params: any) =>
      await organization.create(params),
    updateOrganization: async (_: any, params: any) =>
      await organization.update(params.id, params),
    deleteOrganization: async (_: any, params: any) =>
      await organization.delete(params.id),
    deleteAllOrganizations: async () => await organization.deleteAll()
  },
  Query: {
    organization: async (_: any, params: any) =>
      await organization.get(params.id),
    organizations: async (_: any, params: any) =>
      await organization.filter(params)
  },
  Organization: {
    roles: async (parent: any) => await organization.getAllRoles(parent)
  }
};

export { organization };
