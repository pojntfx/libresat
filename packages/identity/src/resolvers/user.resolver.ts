import { UserController } from "../controllers/user.controller";
import { UserModel } from "../models/user.model";
import { IRole } from "../types/role.type";
import { IScope } from "../types/scope.type";
import { IUser, IUserCreateParams } from "../types/user.type";

const user = new UserController(UserModel);

export default {
  User: {
    roles: async (parent: any): Promise<IRole[]> =>
      await user.getAllRoles(parent),
    scopes: async (parent: any): Promise<IScope[]> =>
      await user.getAllScopes(parent)
  },
  Query: {
    users: async (): Promise<IUser[]> => await user.getAll(),
    user: async (_: any, params: any): Promise<IUser> =>
      await user.get(params.id)
  },
  Mutation: {
    createUser: async (_: any, params: IUserCreateParams) =>
      await user.create(params),
    updateUser: async (_: any, params: any, context: any) =>
      await user.update(_, { ...params, context }),
    assignRoleToUser: async (_: any, params: any): Promise<IUser> =>
      await user.assignRole(params),
    auth: async (_: any, params: any, context: any): Promise<IUser> =>
      await user.auth({ ...params, context }),
    deleteUser: async (_: any, params: any, context: any): Promise<IUser> =>
      await user.delete({ ...params, context })
  }
};

export { user };
