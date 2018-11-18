import { IUser } from "./user.type";
import { IRole } from "./role.type";
import { IEntity } from "./entity.type";

interface IScope extends IEntity {
  roles: IRole[];
  users: IUser[];
}

export { IScope };
