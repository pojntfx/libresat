import { IUser } from "../@types";

interface IGetUserParams {
  id: IUser["id"];
  userGetter(id: IUser["id"]): Promise<IUser>;
}

/**
 * Get a user
 * @param id ID of the user to get
 * @param userGetter Function that returns a user
 */
const getUser = async (
  id: IGetUserParams["id"],
  userGetter: IGetUserParams["userGetter"]
): Promise<IUser> => userGetter(id);

export { getUser };
