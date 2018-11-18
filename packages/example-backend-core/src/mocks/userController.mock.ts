import { IUser, IScope, IRole } from "../@types";

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
}

export { UserController };
