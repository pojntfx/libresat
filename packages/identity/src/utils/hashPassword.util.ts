import { hash } from "bcryptjs";
import { IHashPasswordParams } from "../types/hashPassword.type";

/**
 * Hash a password using bcrypt
 * @param password Password to hash
 */
async function hashPassword(
  password: IHashPasswordParams["password"]
): Promise<string> {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
}

export { hashPassword };
