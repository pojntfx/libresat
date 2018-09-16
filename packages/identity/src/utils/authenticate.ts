import { UserController } from "../controllers/user.controller";
import { compare } from "bcryptjs";
import { AuthenticationFailedError } from "../errors/AuthenticationFailed.error";

async function authenticate(
  user: UserController,
  userId: string,
  password: string
) {
  const encryptedPassword = (await user.get(userId)).password;
  return (await compare(password, encryptedPassword))
    ? true
    : new AuthenticationFailedError();
}

export { authenticate };
