import { Document } from "mongoose";
import { IRole } from "./role.types";

interface IOrganizationGraphQLParams {
  apiVersion: IOrganization["apiVersion"];
  metadataName: IOrganization["metadata"]["name"];
  metadataDescription: IOrganization["metadata"]["description"];
  specEmail: IOrganization["spec"]["email"];
  specSecret: IOrganization["spec"]["secret"];
}

interface IOrganizationParams {
  apiVersion: IOrganization["apiVersion"];
  metadata: IOrganization["metadata"];
  spec: IOrganization["spec"];
}

interface IOrganizationCreator {
  ({  }: IOrganizationParams): Promise<IOrganization>;
}

interface IOrganizationRoleAdder {
  (id: IOrganization["_id"], role: IRole): Promise<IOrganization>;
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
    roles: IRole[];
  };
}

export {
  IOrganization,
  IOrganizationGraphQLParams,
  IOrganizationParams,
  IOrganizationCreator,
  IOrganizationRoleAdder
};
