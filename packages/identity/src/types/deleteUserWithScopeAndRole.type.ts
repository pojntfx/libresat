import { IUser } from "./user.type";
import { IScope } from "./scope.type";
import { IRole } from "./role.type";
import { RoleController } from "../controllers/role.controller";
import { ScopeController } from "../controllers/scope.controller";
import { IGraphQLMongoDBController } from "@libresat/service/dist/predefined/graphQLMongoDB/controller/controller.types";

interface IdeleteUserWithScopeAndRoleParams {
  userId: IUser["id"];
  scopeId: IScope["id"];
  roleId: IRole["id"];
  roleDeleter: RoleController["delete"];
  scopeDeleter: ScopeController["delete"];
  userDeleter: IGraphQLMongoDBController["delete"];
}

export { IdeleteUserWithScopeAndRoleParams };
