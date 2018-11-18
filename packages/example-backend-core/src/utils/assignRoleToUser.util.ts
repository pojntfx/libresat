import { IRole, IUser } from "../@types";

interface IAssignRoleToUserParams {
  roleId: IRole["id"];
  userId: IUser["id"];
  roleGetter(id: IRole["id"]): Promise<IRole>;
  userGetter(id: IUser["id"]): Promise<IUser>;
  roleUpdater(id: IRole["id"], newRole: IRole): Promise<IRole>;
  userUpdater(id: IUser["id"], newUser: IUser): Promise<IUser>;
}

/**
 * Assign a role to a user and assign user to a role
 * @param roleId ID of the role to assign the user to
 * @param userId ID of the user to assign the role to
 * @param roleGetter Function that returns a role
 * @param userGetter Function that returns a user
 * @param roleUpdater Function that updates a role
 * @param userUpdater Function that updates a user
 */
const assignRoleToUser = async (
  roleId: IAssignRoleToUserParams["roleId"],
  userId: IAssignRoleToUserParams["userId"],
  roleGetter: IAssignRoleToUserParams["roleGetter"],
  userGetter: IAssignRoleToUserParams["userGetter"],
  roleUpdater: IAssignRoleToUserParams["roleUpdater"],
  userUpdater: IAssignRoleToUserParams["userUpdater"]
): Promise<IRole> => {
  // Get user and role
  const role = await roleGetter(roleId);
  const user = await userGetter(userId);
  // Add user to role, add role to user
  role.users.push(user);
  user.roles.push(role);
  // Update the user and role
  const updatedRole = await roleUpdater(roleId, role);
  await userUpdater(userId, user);
  // Return updated role
  return updatedRole;
};

export { assignRoleToUser };
