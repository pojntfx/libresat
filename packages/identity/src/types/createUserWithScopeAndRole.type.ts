import { IUser } from "../types/user.type";
import { IScope } from "./scope.type";
import { IRole } from "./role.type";
import { IGraphQLMongoDBController } from "@libresat/service/dist/predefined/graphQLMongoDB/controller/controller.types";

interface ICreateUserWithScopeAndRoleParams {
  creator: IGraphQLMongoDBController["create"];
  name: IUser["name"];
  password: IUser["password"];
}

interface IUserWithScopeAndRoleIds {
  user: IUser;
  userId: IUser["id"];
  userScopeId: IScope["id"];
  writeSelfRoleId: IRole["id"];
}

export { ICreateUserWithScopeAndRoleParams, IUserWithScopeAndRoleIds };
