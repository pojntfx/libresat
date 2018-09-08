import { Document } from "mongoose";

interface IOrganizationParams {
  apiVersion: IOrganization["apiVersion"];
  metadata: IOrganization["metadata"];
  spec: IOrganization["spec"];
}

interface IOrganizationGraphQLParams extends IOrganizationParams {}

interface IOrganizationGraphQLId {
  id: string;
}

interface IOrganizationGraphQLParamsAndId extends IOrganizationParams {
  id: IOrganizationGraphQLId["id"];
}

interface IOrganization extends Document {
  _id: string;
  apiVersion: string;
  metadata: {
    name: string;
    description: string;
  };
  spec: {
    email: string;
    secret: string;
  };
}

export {
  IOrganization,
  IOrganizationParams,
  IOrganizationGraphQLParams,
  IOrganizationGraphQLId,
  IOrganizationGraphQLParamsAndId
};
