import { IUser, IScope, IRole } from "../@types";
import { UserDoesNotExistError } from "../errors";

class UserController implements IUser {
  scopes: IScope[] = [];
  roles: IRole[] = [];
  id: string;

  constructor(public name: IUser["name"], public password: IUser["password"]) {
    this.id = "user1234";
  }

  update = async (_: IUser["id"], newUser: IUser): Promise<IUser> => {
    this.name = newUser.name || this.name;
    this.password = newUser.password || this.password;
    this.scopes = newUser.scopes || this.scopes;
    this.roles = newUser.roles || this.roles;
    return this;
  };

  get = async (id: IUser["id"]): Promise<IUser> => {
    if (id === this.id) {
      return this;
    } else {
      throw new UserDoesNotExistError();
    }
  };
}

export { UserController };
