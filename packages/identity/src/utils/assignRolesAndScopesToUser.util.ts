import {
  IAssignRoleAndScopeToUserParams,
  IUserRoleAndScope
} from "../types/assignRolesAndScopesToUser.type";

/**
 * Assign role and scope to user
 * @param userId ID of the user to assign the roles and scopes to
 * @param roleId ID of the role to assign the user to
 * @param scopeId ID of the scope to assign the role to
 * @param userToScopeAssigner Function that assigns user to scope
 * @param roleToUserAssigner Function that assigns role to user
 * @param roleToScopeAssigner Function that assigns role to scope
 */
async function assignRoleAndScopeToUser(
  userId: IAssignRoleAndScopeToUserParams["userId"],
  roleId: IAssignRoleAndScopeToUserParams["roleId"],
  scopeId: IAssignRoleAndScopeToUserParams["scopeId"],
  userToScopeAssigner: IAssignRoleAndScopeToUserParams["userToScopeAssigner"],
  roleToUserAssigner: IAssignRoleAndScopeToUserParams["roleToUserAssigner"],
  roleToScopeAssigner: IAssignRoleAndScopeToUserParams["roleToScopeAssigner"]
): Promise<IUserRoleAndScope> {
  const scopeOfUser = await userToScopeAssigner({
    scopeId,
    userId
  });

  const roleOfUser = await roleToUserAssigner({
    userId,
    roleId
  });

  const roleOfScope = await roleToScopeAssigner({
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
