import { IOrganizationGraphQLParams } from "../types/organization.types";
import { Organization } from "../controllers/organization.controller";

export default {
  Query: {
    allOrganizations: async () => await Organization.getAll()
  },
  Mutation: {
    createOrganization: async (
      _: any,
      {
        apiVersion,
        metadataName: name,
        metadataDescription: description,
        specEmail: email,
        specSecret: secret
      }: IOrganizationGraphQLParams
    ) =>
      await Organization.create({
        apiVersion,
        metadata: {
          name,
          description
        },
        spec: {
          email,
          secret
        }
      })
  }
};
