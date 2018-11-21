import { IRole } from "../@types";

interface IGetRoleParams {
  id: IRole["id"];
  roleGetter(id: IRole["id"]): Promise<IRole>;
}

/**
 * Get a role
 * @param id ID of the role to get
 * @param roleGetter Function that returns a role
 */
const getRole = async (
  id: IGetRoleParams["id"],
  roleGetter: IGetRoleParams["roleGetter"]
): Promise<IRole> => await roleGetter(id);

export { getRole };
