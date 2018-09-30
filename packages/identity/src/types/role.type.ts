import { IUser } from "./user.type";
import { IScope } from "./scope.type";

interface IRole {
  id: string;
  name: string;
  users: IUser[];
  scopes: IScope[];
}

export { IRole };
