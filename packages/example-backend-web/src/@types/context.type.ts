import { IUser } from "@libresat/example-backend-core";

interface IContext {
  headers: {
    userid: IUser["id"];
    password: IUser["password"];
  };
}

export { IContext };
