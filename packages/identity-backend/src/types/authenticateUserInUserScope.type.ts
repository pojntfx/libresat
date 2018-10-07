import { IScope } from "./scope.type";
import { UserController } from "../controllers/user.controller";

interface IAuthenticateUserInUserScopeParams {
  authenticator: UserController["auth"];
  params: any;
  scopeId: IScope["id"];
}

export { IAuthenticateUserInUserScopeParams };
