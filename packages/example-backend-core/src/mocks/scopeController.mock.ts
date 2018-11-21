import { IScope, IUser, IRole } from "../@types";
import { ScopeDoesNotExistError } from "../errors";

class ScopeController implements IScope {
  users: IUser[] = [];
  roles: IRole[] = [];
  id: string;

  constructor(public name: IScope["name"]) {
    this.id = "scope1234";
  }

  update = async (_: IScope["id"], newScope: IScope): Promise<IScope> => {
    this.id = newScope.id || this.id;
    this.name = newScope.name || this.name;
    this.roles = newScope.roles || this.roles;
    this.users = newScope.users || this.users;
    return this;
  };

  get = async (id: IScope["id"]): Promise<IScope> => {
    if (id === this.id) {
      return this;
    } else {
      throw new ScopeDoesNotExistError();
    }
  };
}

export { ScopeController };
