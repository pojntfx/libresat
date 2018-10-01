import { IUserUpdateParams } from "./user.type";
import { IScope } from "./scope.type";
import { UserController } from "../controllers/user.controller";

interface IAuthenticateUserInUserScopeParams {
  userController: UserController;
  params: IUserUpdateParams;
  scopeId: IScope["id"];
}

export { IAuthenticateUserInUserScopeParams };
