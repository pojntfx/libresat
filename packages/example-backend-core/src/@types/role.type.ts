import { IScope } from "./scope.type";
import { IUser } from "./user.type";
import { IEntity } from "./entity.type";

interface IRole extends IEntity {
  scopes: IScope[];
  users: IUser[];
}

export { IRole };
