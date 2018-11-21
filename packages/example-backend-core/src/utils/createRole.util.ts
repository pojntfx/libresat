import { IRole } from "../@types";

interface ICreateRoleParams {
  name: IRole["name"];
  roleCreator(name: IRole["name"]): Promise<IRole>;
}

/**
 * Create a role
 * @param name Name of the role
 * @param roleCreator Function that returns a role
 */
const createRole = async (
  name: ICreateRoleParams["name"],
  roleCreator: ICreateRoleParams["roleCreator"]
): Promise<IRole> => await roleCreator(name);

export { createRole };
