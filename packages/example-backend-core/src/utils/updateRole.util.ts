import { IRole } from "../@types";

interface IUpdateRoleParams {
  id: IRole["id"];
  newRole: IRole;
  roleUpdater(id: IRole["id"], newRole: IRole): IRole;
}

/**
 * Update a role
 * @param id ID of the role to update
 * @param newRole Role with the new data
 * @param roleUpdater Function that updates a role
 */
const updateRole = async (
  id: IUpdateRoleParams["id"],
  newRole: IUpdateRoleParams["newRole"],
  roleUpdater: IUpdateRoleParams["roleUpdater"]
): Promise<IRole> => roleUpdater(id, newRole);

export { updateRole };
