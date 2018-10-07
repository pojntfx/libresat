import { IUser } from "./user.type";
import { IScope } from "./scope.type";
import {
  IGraphQLMongoDBControllerParams,
  GraphQLMongoDBController
} from "@libresat/service";

interface IRole {
  id: string;
  name: string;
  users: IUser[];
  scopes: IScope[];
}

interface IRoleCreateParams extends IGraphQLMongoDBControllerParams {
  name: IRole["name"];
  isMeta: boolean;
}

interface IRoleController extends GraphQLMongoDBController {
  create(params: IRoleCreateParams): Promise<IRole | Error>;
}

export { IRole, IRoleCreateParams, IRoleController };
