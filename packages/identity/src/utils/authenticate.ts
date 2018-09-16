import { UserController } from "../controllers/user.controller";
import { compare } from "bcryptjs";

async function authenticate(
  user: UserController,
  userId: string,
  password: string
) {
  const encryptedPassword = (await user.get(userId)).password;
  return await compare(password, encryptedPassword);
}

export { authenticate };
