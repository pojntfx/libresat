import { IRole } from "../@types";

interface IDeleteRoleParams {
  id: IRole["id"];
  roleDeleter(id: IRole["id"]): Promise<IRole>;
}

/**
 * Delete a role
 * @param id ID of the role to delete
 * @param roleDeleter Function that deletes a role
 */
const deleteRole = async (
  id: IDeleteRoleParams["id"],
  roleDeleter: IDeleteRoleParams["roleDeleter"]
) => await roleDeleter(id);

export { deleteRole };
