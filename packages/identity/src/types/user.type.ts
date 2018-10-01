import { IRole } from "./role.type";
import { IScope } from "./scope.type";
import { GraphQLMongoDBController } from "@libresat/service";
import { IGraphQLMongoDBControllerParams } from "@libresat/service";
import { CouldNotUpdateUserError } from "../errors/CouldNotUpdateUser.error";
import { CouldNotDeleteUserError } from "../errors/CouldNotDeleteUser.error";
import { CouldNotCreateUserError } from "../errors/CouldNotCreateUser.error";

interface IUser {
  id: string;
  name: string;
  password: string;
  roles: IRole[];
  scopes: IScope[];
}

interface IGraphQLMongoDBControllerParamsWithAuthorizationHeader {
  context: {
    headers: {
      userid: IUser["id"];
      password: IUser["password"];
    };
  };
}

interface IUserCreateParams
  extends IGraphQLMongoDBControllerParamsWithAuthorizationHeader {
  name: IUser["name"];
  password: IUser["password"];
}

interface IUserUpdateParams
  extends IGraphQLMongoDBControllerParamsWithAuthorizationHeader {
  newName: IUser["name"];
  newPassword: IUser["password"];
}

interface IUserDeleteParams
  extends IGraphQLMongoDBControllerParamsWithAuthorizationHeader {}

interface IUserController extends GraphQLMongoDBController {
  create(params: IUserCreateParams): Promise<IUser | CouldNotCreateUserError>;
  updateWithCredentials(
    params: IUserUpdateParams
  ): Promise<IUser | CouldNotUpdateUserError>;
  deleteWithCredentials(
    params: IUserDeleteParams
  ): Promise<IUser | CouldNotDeleteUserError>;
}

export {
  IUser,
  IUserCreateParams,
  IUserUpdateParams,
  IUserDeleteParams,
  IUserController,
  IGraphQLMongoDBControllerParamsWithAuthorizationHeader
};
