import { IContext } from "../@types";

interface IAuthGetRoleParams {
  userid: IContext["headers"]["userid"];
  password: IContext["headers"]["password"];
}

const authGetRole = async (
  userid: IAuthGetRoleParams["userid"],
  password: IAuthGetRoleParams["password"]
): Promise<boolean> => true;

export { authGetRole };
