import { IContext } from "../@types";

interface IAuthCreateRoleParams {
  userid: IContext["headers"]["userid"];
  password: IContext["headers"]["password"];
}

const authCreateRole = async (
  userid: IAuthCreateRoleParams["userid"],
  password: IAuthCreateRoleParams["password"]
): Promise<boolean> => true;

export { authCreateRole };
