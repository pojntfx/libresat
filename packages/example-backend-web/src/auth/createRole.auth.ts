import { IContext } from "../@types/context.type";

const authCreateRole = async (
  userid: IContext["headers"]["userid"],
  password: IContext["headers"]["password"]
): Promise<boolean> => true;

export { authCreateRole };
