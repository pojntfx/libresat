import { composeCreateRole } from "../composers";
import { IRole } from "@libresat/example-backend-core";
import { IContext } from "../@types";

interface IResolveCreateRoleParams {
  params: {
    name: IRole["name"];
  };
  context: IContext;
}

const resolveCreateRole = {
  Mutation: {
    createRole: async (
      _: any,
      params: IResolveCreateRoleParams["params"],
      context: IResolveCreateRoleParams["context"]
    ) => composeCreateRole(params, context)
  }
};

export { IResolveCreateRoleParams };
export default resolveCreateRole;
