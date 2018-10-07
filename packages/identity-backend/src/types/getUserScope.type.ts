import { UserController } from "../controllers/user.controller";
import { IUser } from "./user.type";

interface IGetUserScopeParams {
  userGetter: UserController["get"];
  userWithScopesGetter: UserController["getWithScopes"];
  userId: IUser["id"];
}

export { IGetUserScopeParams };
