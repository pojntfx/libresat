import { IOrganization } from "./organization.types";

interface IRoleGraphQLParams {
  apiVersion: IRole["apiVersion"];
  metadataName: IRole["metadata"]["name"];
  metadataDescription: IRole["metadata"]["description"];
  specSelector: IRole["spec"]["selector"]["organization"];
  specEmail: IRole["spec"]["email"];
  specSecret: IRole["spec"]["secret"];
  specAccess: IRole["spec"]["access"];
}

interface IRoleParams {
  apiVersion: IRole["apiVersion"];
  metadata: IRole["metadata"];
  spec: IRole["spec"];
}

interface IRoleCreator {
  ({  }: IRoleParams): Promise<IOrganization | undefined>;
}

enum Access {
  READUSER = "READUSER",
  WRITEUSER = "WRITEUSER",
  READCLOUD = "READCLOUD",
  WRITECLOUD = "WRITECLOUD",
  READCLUSTER = "READCLUSTER",
  WRITECLUSTER = "WRITECLUSTER",
  READHOST = "READHOST",
  WRITEHOST = "WRITEHOST"
}

interface IRole extends Document {
  _id: string;
  apiVersion: string;
  metadata: {
    name: string;
    description: string;
  };
  spec: {
    selector: {
      organization: string;
    };
    email: string;
    secret: string;
    access: Access;
    // users?: User[]
  };
}

export { IRoleGraphQLParams, IRoleParams, IRoleCreator, IRole };
