import { IScope } from "../types/scope.type";
import { IRole } from "../types/role.type";
import { IUser } from "./user.type";

interface IAssignRoleAndScopeToUserParams {
  userId: IUser["id"];
  roleId: IRole["id"];
  scopeId: IScope["id"];
}

interface IUserRoleAndScope {
  scopeOfUser: IScope;
  roleOfUser: IRole;
  roleOfScope: IRole;
}

export { IAssignRoleAndScopeToUserParams, IUserRoleAndScope };
