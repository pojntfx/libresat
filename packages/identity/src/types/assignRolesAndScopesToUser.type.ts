import { IScope } from "../types/scope.type";
import { IRole } from "../types/role.type";

interface IAssignRoleAndScopeToUserParams {
  userId: string;
  roleId: string;
  scopeId: string;
}

interface IUserRoleAndScope {
  scopeOfUser: IScope;
  roleOfUser: IRole;
  roleOfScope: IRole;
}

export { IAssignRoleAndScopeToUserParams, IUserRoleAndScope };
