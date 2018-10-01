import { IUser } from "../types/user.type";
import { hashPassword } from "./hashPassword.util";
import { IUpdateUserByIdParams } from "../types/updateUserById.type";

/**
 * Update a user by their ID
 * @param updater User controller update action
 * @param userId Id of the user to update
 * @param name New name of the user to update
 * @param password New password of the user to update
 */
async function updateUserById(
  updater: IUpdateUserByIdParams["updater"],
  userId: IUpdateUserByIdParams["userId"],
  name: IUpdateUserByIdParams["name"],
  password: IUpdateUserByIdParams["password"]
): Promise<IUser> {
  const user = await updater(userId, {
    name,
    password: await hashPassword(password)
  });
  return user as IUser;
}

export { updateUserById };
