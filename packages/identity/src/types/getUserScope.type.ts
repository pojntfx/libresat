import { UserController } from "../controllers/user.controller";
import { IUser } from "./user.type";

interface IGetUserScopeParams {
  userController: UserController;
  userId: IUser["id"];
}

export { IGetUserScopeParams };
