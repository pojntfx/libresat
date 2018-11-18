import { IScope } from "./scope.type";
import { IRole } from "./role.type";
import { IEntity } from "./entity.type";

interface IUser extends IEntity {
  password: string;
  scopes: IScope[];
  roles: IRole[];
}

export { IUser };
