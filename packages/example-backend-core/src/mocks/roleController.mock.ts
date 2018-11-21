import { IRole, IScope, IUser } from "../@types";
import { RoleDoesNotExistError } from "../errors";

class RoleController implements IRole {
  scopes: IScope[] = [];
  users: IUser[] = [];
  id: string;

  constructor(public name: IRole["name"]) {
    this.id = "role1234";
  }

  update = async (_: IRole["id"], newRole: IRole): Promise<IRole> => {
    this.id = newRole.id || this.id;
    this.name = newRole.name || this.name;
    this.scopes = newRole.scopes || this.scopes;
    this.users = newRole.users || this.users;
    return this;
  };

  get = async (id: IRole["id"]): Promise<IRole> => {
    if (id === this.id) {
      return this;
    } else {
      throw new RoleDoesNotExistError();
    }
  };
}

export { RoleController };
