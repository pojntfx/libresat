import { composeGetRole } from "../composers";
import { IRole } from "@libresat/example-backend-core";
import { IContext } from "../@types";

interface IResolveGetRoleParams {
  params: {
    id: IRole["id"];
  };
  context: IContext;
}

const resolveGetRole = {
  Query: {
    getRole: async (
      _: any,
      params: IResolveGetRoleParams["params"],
      context: IResolveGetRoleParams["context"]
    ) => composeGetRole(params, context)
  }
};

export { IResolveGetRoleParams };
export default resolveGetRole;
