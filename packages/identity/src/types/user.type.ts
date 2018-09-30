import { IRole } from "./role.type";
import { IScope } from "./scope.type";
import { GraphQLMongoDBController } from "@libresat/service";
import { IGraphQLMongoDBControllerParams } from "@libresat/service";

interface IUser {
  id: string;
  name: string;
  password: string;
  roles: IRole[];
  scopes: IScope[];
}

interface IUserCreateParams extends IGraphQLMongoDBControllerParams {
  name: IUser["name"];
  password: IUser["password"];
}

interface IUserController extends GraphQLMongoDBController {
  create(params: IUserCreateParams): Promise<IUser>;
}

export { IUser, IUserCreateParams, IUserController };
