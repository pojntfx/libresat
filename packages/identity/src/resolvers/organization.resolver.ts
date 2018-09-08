import {
  IOrganizationGraphQLParams,
  IOrganization,
  IOrganizationGraphQLId,
  IOrganizationGraphQLParamsAndId
} from "../types/organization.types";
import { OrganizationController } from "../controllers/organization.controller";
import { OrganizationModel } from "../models/organization.model";
import {
  transformId,
  transformParams
} from "../transformers/organization.transformers";
const organization = new OrganizationController(OrganizationModel);

export default {
  Query: {
    getOrganization: async (_: any, params: IOrganizationGraphQLId) =>
      await organization.get(transformId(params)),
    getAllOrganizations: async () => await organization.getAll(),
    filterAllOrganizations: async (
      _: any,
      params: IOrganizationGraphQLParamsAndId
    ) => await organization.filter(transformParams(params))
  },
  Mutation: {
    createOrganization: async (_: any, params: IOrganizationGraphQLParams) =>
      await organization.create(transformParams(params)),
    updateOrganization: async (
      _: any,
      params: IOrganizationGraphQLParamsAndId
    ) =>
      await organization.update(transformId(params), transformParams(params)),
    deleteOrganization: async (_: any, params: IOrganizationGraphQLId) =>
      await organization.delete(transformId(params)),
    deleteAllOrganizations: async () => await organization.deleteAll()
  }
};
