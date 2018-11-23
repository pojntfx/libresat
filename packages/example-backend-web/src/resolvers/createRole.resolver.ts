import { IContext } from "../@types/context.type";
import { IProvidedRole } from "../@types";
import { IRole } from "@libresat/example-backend-core";
import { connectCreateRole } from "../connectors/createRole.connector";

interface ICreateRoleResolverParams {
  context: IContext;
  params: IProvidedRole;
}

const createRoleResolver = {
  Mutation: {
    createRole: async (
      _: any,
      params: ICreateRoleResolverParams["params"],
      context: ICreateRoleResolverParams["context"]
    ): Promise<IRole> => connectCreateRole(params, context)
  }
};

export default createRoleResolver;
