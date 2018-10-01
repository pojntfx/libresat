import { GraphQLMongoDBController } from "@libresat/service";
import { IUser } from "../types/user.type";

interface ICreateUserWithScopeAndRoleParams {
  creator: GraphQLMongoDBController["create"];
  name: IUser["name"];
  password: IUser["password"];
}

interface IUserWithScopeAndRoleIds {
  user: IUser;
  userId: string;
  userScopeId: string;
  writeSelfRoleId: string;
}

export { ICreateUserWithScopeAndRoleParams, IUserWithScopeAndRoleIds };
