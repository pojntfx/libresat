import { compare } from "bcryptjs";
import { AuthenticationFailedError } from "../errors/AuthenticationFailed.error";
import { IUserController } from "../types/user.type";

/**
 * Authenticate a user
 * @param user User controller
 * @param userId Id of the user to authenticate
 * @param password Password of the user to authenticate
 */
async function authenticate(
  user: IUserController,
  userId: string,
  password: string
) {
  const encryptedPassword = (await user.get(userId)).password;
  if (await compare(password, encryptedPassword)) {
    return true;
  } else {
    throw new AuthenticationFailedError();
  }
}

export { authenticate };
