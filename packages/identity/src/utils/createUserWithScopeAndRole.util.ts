import { IUser } from "../types/user.type";
import { scope } from "../resolvers/scope.resolver";
import { role } from "../resolvers/role.resolver";
import {
  ICreateUserWithScopeAndRoleParams,
  IUserWithScopeAndRoleIds
} from "../types/createUserWithScopeAndRole.type";
import { UserWithNameExistsError } from "../errors/UserWithNameExists.error";
import { WRITE_SELF } from "../constants/roles.constants";

/**
 * Create a user with a scope and role
 * @param creator Function that creates a new user
 * @param name Name of the new user
 * @param password Hashed password of the new user
 */
async function createUserWithScopeAndRole(
  creator: ICreateUserWithScopeAndRoleParams["creator"],
  name: ICreateUserWithScopeAndRoleParams["name"],
  password: ICreateUserWithScopeAndRoleParams["password"]
): Promise<IUserWithScopeAndRoleIds> {
  try {
    const user = (await creator({
      name,
      password
    })) as IUser;

    const { id: userId } = user;

    // Create a scope for each user so that they can edit themselves
    const { id: userScopeId } = await scope.create({
      name: userId,
      isMeta: true
    });

    const { id: writeSelfRoleId } = await role.create({
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
