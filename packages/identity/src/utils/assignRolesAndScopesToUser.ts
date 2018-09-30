import { scope } from "../resolvers/scope.resolver";
import { user } from "../resolvers/user.resolver";
import {
  IAssignRoleAndScopeToUserParams,
  IUserRoleAndScope
} from "./assignRolesAndScopesToUser.types";

/**
 * Assign role and scope to user
 * @param userId ID of the user to assign the roles and scopes to
 * @param roleId ID of the role to assign the user to
 * @param scopeId ID of the scope to assign the role to
 */
async function assignRoleAndScopeToUser(
  userId: IAssignRoleAndScopeToUserParams["userId"],
  roleId: IAssignRoleAndScopeToUserParams["roleId"],
  scopeId: IAssignRoleAndScopeToUserParams["scopeId"]
): Promise<IUserRoleAndScope> {
  const scopeOfUser = await scope.assignUser({
    scopeId,
    userId
  });

  const roleOfUser = await user.assignRole({
    userId,
    roleId
  });

  const roleOfScope = await scope.assignRole({
    scopeId,
    roleId
  });

  return {
    scopeOfUser,
    roleOfUser,
    roleOfScope
  };
}

export { assignRoleAndScopeToUser };
