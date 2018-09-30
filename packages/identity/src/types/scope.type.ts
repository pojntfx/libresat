import { IUser } from "./user.type";
import { IRole } from "./role.type";

interface IScope {
  id: string;
  name: string;
  users: IUser[];
  roles: IRole[];
}

export { IScope };
