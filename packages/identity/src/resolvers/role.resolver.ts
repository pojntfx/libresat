import { IRoleGraphQLParams } from "../types/role.types";
import { Role } from "../controllers/role.controller";

export default {
  Mutation: {
    createRole: async (
      _: any,
      {
        apiVersion,
        metadataName: name,
        metadataDescription: description,
        specSelector: selector,
        specEmail: email,
        specSecret: secret,
        specAccess: access
      }: IRoleGraphQLParams
    ) =>
      await Role.create({
        apiVersion,
        metadata: {
          name,
          description
        },
        spec: {
          selector: {
            organization: selector
          },
          email,
          secret,
          access
        }
      })
  }
};
