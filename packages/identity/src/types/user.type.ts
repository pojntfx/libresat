import { IRole } from "./role.type";
import { IScope } from "./scope.type";
import { GraphQLMongoDBController } from "@libresat/service";
import { CouldNotUpdateUserError } from "../errors/CouldNotUpdateUser.error";
import { CouldNotDeleteUserError } from "../errors/CouldNotDeleteUser.error";
import { CouldNotCreateUserError } from "../errors/CouldNotCreateUser.error";
import { CouldNotAuthUserError } from "../errors/CouldNotAuthUser.error";

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

interface IUserAuthParams
  extends IGraphQLMongoDBControllerParamsWithAuthorizationHeader {
  scopeId: IScope["id"];
  validRolesNames: [string];
}

interface IUserController extends GraphQLMongoDBController {
  create(params: IUserCreateParams): Promise<IUser | CouldNotCreateUserError>;
  updateWithCredentials(
    params: IUserUpdateParams
  ): Promise<IUser | CouldNotUpdateUserError>;
  deleteWithCredentials(
    params: IUserDeleteParams
  ): Promise<IUser | CouldNotDeleteUserError>;
  auth(params: IUserAuthParams): Promise<IUser | CouldNotAuthUserError>;
}

export {
  IUser,
  IUserCreateParams,
  IUserUpdateParams,
  IUserDeleteParams,
  IUserAuthParams,
  IUserController,
  IGraphQLMongoDBControllerParamsWithAuthorizationHeader
};
