import { IRole } from "@libresat/example-backend-core";
import { IContext } from "../@types";
import { IResolveGetRoleParams } from "../resolvers";

interface IMapGetRoleParams extends IResolveGetRoleParams {}

interface IMappedRole {
  id: IRole["id"];
  auth: IContext["headers"];
}

const mapGetRole = async (
  params: IMapGetRoleParams["params"],
  context: IMapGetRoleParams["context"]
): Promise<IMappedRole> => ({
  id: params.id,
  auth: {
    userid: context.headers.userid,
    password: context.headers.password
  }
});

export { mapGetRole };
