import { mapCreateRole } from "../mappers";
import { authCreateRole } from "../auth";
import { IRole, IUser, createRole } from "@libresat/example-backend-core";
import { IProvidedRole } from "../@types";
import { IContext } from "../@types/context.type";
import { validateCreateRole } from "../validators";
import { RoleController } from "../controllers";
import { RoleModel } from "../models";

interface IConnectCreateRoleParams {
  providedRole: IProvidedRole;
  context: IContext;
}

const role = new RoleController(RoleModel);

const connectCreateRole = async (
  providedRole: IConnectCreateRoleParams["providedRole"],
  context: IConnectCreateRoleParams["context"]
): Promise<IRole> =>
  validateCreateRole(providedRole)
    .then(validatedRole => mapCreateRole(validatedRole))
    .then(async mappedRole => {
      await authCreateRole(context.headers.userid, context.headers.password);
      return mappedRole;
    })
    .then(authedRole =>
      createRole(authedRole.name, async name => role.create({ name }))
    );

export { connectCreateRole };
