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
  ({  }: IOrganizationParams): Promise<any>;
}

interface IOrganization {
  _id: string;
  apiVersion: string;
  metadata: {
    name: string;
    description: string;
  };
  spec: {
    email: string;
    secret: string;
    // roles?: Role[]
  };
}

export {
  IOrganizationGraphQLParams,
  IOrganizationParams,
  IOrganizationCreator,
  IOrganization
};
