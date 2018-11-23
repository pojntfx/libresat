import { IRole } from "@libresat/example-backend-core";
import { IContext } from "../@types";
import { IResolveCreateRoleParams } from "../resolvers";

interface IMapCreateRoleParams extends IResolveCreateRoleParams {}

interface IMappedRole {
  name: IRole["name"];
  auth: IContext["headers"];
}

const mapCreateRole = async (
  params: IMapCreateRoleParams["params"],
  context: IMapCreateRoleParams["context"]
): Promise<IMappedRole> => ({
  name: params.name,
  auth: {
    userid: context.headers.userid,
    password: context.headers.password
  }
});

export { mapCreateRole };
