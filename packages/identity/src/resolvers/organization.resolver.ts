import { OrganizationController } from "../controllers/organization.controller";
import { OrganizationModel } from "../models/organization.model";
import { role } from "./role.resolver";

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
    roles: async (parent: any, params: any) =>
      await organization
        .get(parent.id)
        .then(org => org.roles.map((id: string) => role.get(id)))
  }
};

export { organization };
