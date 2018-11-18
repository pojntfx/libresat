import { IUser } from "../@types";

interface IUpdateUserParams {
  id: IUser["id"];
  newUser: IUser;
  userUpdater(id: IUser["id"], newUser: IUser): IUser;
}

/**
 * Update a user
 * @param id ID of the user to update
 * @param newUser User with the new data
 * @param userUpdater Function that updates a user
 */
const updateUser = async (
  id: IUpdateUserParams["id"],
  newUser: IUpdateUserParams["newUser"],
  userUpdater: IUpdateUserParams["userUpdater"]
): Promise<IUser> => userUpdater(id, newUser);

export { updateUser };
