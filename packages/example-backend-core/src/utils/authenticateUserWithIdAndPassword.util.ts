import { IUser } from "../@types";
import { UserDoesNotExistError, WrongPasswordError } from "../errors";

interface IAuthenticateUserWithIdAndPasswordParams {
  id: IUser["id"];
  password: IUser["password"];
  userGetter(id: IUser["id"]): Promise<IUser>;
}

/**
 * Authenticate a user with their ID and Password
 * @param id ID of the user to authenticate
 * @param password Password of the user to authenticate
 * @param userGetter Function that returns a user
 */
const authenticateUserWithIdAndPassword = async (
  id: IAuthenticateUserWithIdAndPasswordParams["id"],
  password: IAuthenticateUserWithIdAndPasswordParams["password"],
  userGetter: IAuthenticateUserWithIdAndPasswordParams["userGetter"]
): Promise<boolean> => {
  const user = await userGetter(id);
  if (user) {
    if (user.password === password) {
      return true;
    } else {
      throw new WrongPasswordError();
    }
  } else {
    throw new UserDoesNotExistError();
  }
};

export { authenticateUserWithIdAndPassword };
