import { IUser } from "../types/user.type";
import { IScope } from "./scope.type";
import { IRole } from "./role.type";
import { IGraphQLMongoDBController } from "@libresat/service/dist/predefined/graphQLMongoDB/controller/controller.types";
import { ScopeController } from "../controllers/scope.controller";
import { RoleController } from "../controllers/role.controller";

interface ICreateUserWithScopeAndRoleParams {
  name: IUser["name"];
  password: IUser["password"];
  creator: IGraphQLMongoDBController["create"];
  scopeCreator: ScopeController["create"],
  roleCreator: RoleController["create"]
}

interface IUserWithScopeAndRoleIds {
  user: IUser;
  userId: IUser["id"];
  userScopeId: IScope["id"];
  writeSelfRoleId: IRole["id"];
}

export { ICreateUserWithScopeAndRoleParams, IUserWithScopeAndRoleIds };
