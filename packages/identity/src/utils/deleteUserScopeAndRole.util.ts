import { RoleController } from "../controllers/role.controller";
import { ScopeController } from "../controllers/scope.controller";
import { IGraphQLMongoDBController } from "@libresat/service/dist/predefined/graphQLMongoDB/controller/controller.types";
import { IRole } from "../types/role.type";
import { IScope } from "../types/scope.type";
import { IUser } from "../types/user.type";

interface IDeleteUserScopeAndRoleParams {
  userId: IUser["id"];
  scopeId: IScope["id"];
  roleId: IRole["id"];
  roleDeleter: RoleController["delete"];
  scopeDeleter: ScopeController["delete"];
  userDeleter: IGraphQLMongoDBController["delete"];
}

async function deleteUserScopeAndRole(
  userId: IDeleteUserScopeAndRoleParams["userId"],
  scopeId: IDeleteUserScopeAndRoleParams["scopeId"],
  roleId: IDeleteUserScopeAndRoleParams["roleId"],
  roleDeleter: IDeleteUserScopeAndRoleParams["roleDeleter"],
  scopeDeleter: IDeleteUserScopeAndRoleParams["scopeDeleter"],
  userDeleter: IDeleteUserScopeAndRoleParams["userDeleter"]
) {
  roleDeleter(roleId);
  scopeDeleter(scopeId);
  return await userDeleter(userId);
}

export { deleteUserScopeAndRole };
