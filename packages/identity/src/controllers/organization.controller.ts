import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { role } from "../resolvers/role.resolver";
import { hash, compare } from "bcrypt";
import { AuthenticationFailedError } from "../errors/AuthenticationFailed.error";

class OrganizationController extends Controller {
  create = async (params: any) =>
    await hash(params.secret, 10).then(
      async (saltedSecret: string) =>
        await super.create({
          ...params,
          secret: saltedSecret
        })
    );

  update = async (id: string, params: any) =>
    compare(
      params.oldSecret,
      await this.get(id).then((organization: any) => organization.secret)
    ).then(
      async (res: boolean) =>
        res
          ? await hash(params.newSecret, 10).then(
              async (saltedSecret: string) =>
                await super.update(params.id, {
                  ...params,
                  secret: saltedSecret
                })
            )
          : new AuthenticationFailedError()
    );

  getAllRoles = async (parent: any) =>
    await this.get(parent.id).then(org =>
      org.roles.map(async (roleId: string) => await role.get(roleId))
    );

  filter = async (params: any) => super.filter(params.filter || undefined);
}

export { OrganizationController };
