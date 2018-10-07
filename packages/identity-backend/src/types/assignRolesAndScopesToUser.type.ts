import { IScope } from "../types/scope.type";
import { IRole } from "../types/role.type";
import { IUser } from "./user.type";
import { ScopeController } from "../controllers/scope.controller";
import { UserController } from "../controllers/user.controller";

interface IAssignRoleAndScopeToUserParams {
  userId: IUser["id"];
  roleId: IRole["id"];
  scopeId: IScope["id"];
  userToScopeAssigner: ScopeController["assignUser"];
  roleToUserAssigner: UserController["assignRole"];
  roleToScopeAssigner: ScopeController["assignRole"];
}

interface IUserRoleAndScope {
  scopeOfUser: IScope;
  roleOfUser: IRole;
  roleOfScope: IRole;
}

export { IAssignRoleAndScopeToUserParams, IUserRoleAndScope };
