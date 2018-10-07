import { IUser } from "./user.type";

interface IHashPasswordParams {
  password: IUser["password"];
}

export { IHashPasswordParams };
