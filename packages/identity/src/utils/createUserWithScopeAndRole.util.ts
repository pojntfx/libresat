import { IUser } from "../types/user.type";
import {
  ICreateUserWithScopeAndRoleParams,
  IUserWithScopeAndRoleIds
} from "../types/createUserWithScopeAndRole.type";
import { UserWithNameExistsError } from "../errors/UserWithNameExists.error";
import { WRITE_SELF } from "../constants/roles.constants";

/**
 * Create a user with a scope and role
 * @param name Name of the new user
 * @param password Hashed password of the new user
 * @param creator Function that creates a new user
 * @param scopeCreator Function that creates a new scope
 * @param roleCreator Function that create a new role
 */
async function createUserWithScopeAndRole(
  name: ICreateUserWithScopeAndRoleParams["name"],
  password: ICreateUserWithScopeAndRoleParams["password"],
  creator: ICreateUserWithScopeAndRoleParams["creator"],
  scopeCreator: ICreateUserWithScopeAndRoleParams["scopeCreator"],
  roleCreator: ICreateUserWithScopeAndRoleParams["roleCreator"]
): Promise<IUserWithScopeAndRoleIds> {
  try {
    const user = (await creator({
      name,
      password
    })) as IUser;

    const { id: userId } = user;

    // Create a scope for each user so that they can edit themselves
    const { id: userScopeId } = await scopeCreator({
      name: userId,
      isMeta: true
    });

    const { id: writeSelfRoleId } = await roleCreator({
      name: WRITE_SELF,
      isMeta: true
    });

    return {
      user,
      userId,
      userScopeId,
      writeSelfRoleId
    };
  } catch (e) {
    throw new UserWithNameExistsError();
  }
}

export { createUserWithScopeAndRole };
