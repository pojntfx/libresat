import { UserController } from "../controllers/user.controller";
import { compare } from "bcryptjs";
import { AuthenticationFailedError } from "../errors/AuthenticationFailed.error";

async function authenticate(
  user: UserController,
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
