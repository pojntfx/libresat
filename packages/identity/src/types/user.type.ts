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

interface IUserUpdateParams extends IGraphQLMongoDBControllerParams {
  newName: IUser["name"];
  newPassword: IUser["password"];
}

interface IUserController extends GraphQLMongoDBController {
  create(params: IUserCreateParams): Promise<IUser | Error>;
  update(id: IUser["id"], params: IUserUpdateParams): Promise<IUser | Error>;
}

export { IUser, IUserCreateParams, IUserUpdateParams, IUserController };
