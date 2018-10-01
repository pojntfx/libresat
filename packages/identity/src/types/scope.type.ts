import { IUser } from "./user.type";
import { IRole } from "./role.type";
import {
  IGraphQLMongoDBControllerParams,
  GraphQLMongoDBController
} from "@libresat/service";

interface IScope {
  id: string;
  name: string;
  users: IUser[];
  roles: IRole[];
}

interface IScopeCreateParams extends IGraphQLMongoDBControllerParams {
  name: IScope["name"];
}

interface IScopeController extends GraphQLMongoDBController {
  create(params: IScopeCreateParams): Promise<IScope | Error>;
}

export { IScope, IScopeCreateParams, IScopeController };
