import {
  IOrganizationGraphQLParams,
  IOrganization,
  IOrganizationGraphQLParamsAndId
} from "../types/organization.types";

const transformParams = (
  params: IOrganizationGraphQLParams | IOrganizationGraphQLParamsAndId
) => params;

const transformId = (params: IOrganization["id"]) => params;

export { transformParams, transformId };
