import { UserController } from "../controllers/user.controller";
import { IUser } from "./user.type";

interface IGetUserRoleParams {
  userId: IUser["id"];
  userWithRolesGetter: UserController["getWithRoles"];
}

export { IGetUserRoleParams };
