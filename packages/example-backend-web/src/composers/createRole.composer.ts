import { IResolveCreateRoleParams } from "../resolvers";
import { RoleController } from "../controllers";
import { RoleModel } from "../models";
import { IRole, createRole } from "@libresat/example-backend-core";
import { mapCreateRole } from "../mappers";
import { authCreateRole } from "../auth";
import { validateCreateRole } from "../validators";

interface IComposeCreateRoleParams extends IResolveCreateRoleParams {}

const role = new RoleController(RoleModel);

const composeCreateRole = async (
  params: IComposeCreateRoleParams["params"],
  context: IComposeCreateRoleParams["context"]
): Promise<IRole> => {
  try {
    const { name, auth } = await mapCreateRole(params, context);
    try {
      const isAuthed = await authCreateRole(auth.userid, auth.userid);
      if (isAuthed) {
        try {
          const isValid = await validateCreateRole(name);
          if (isValid) {
            try {
              return await createRole(name, name => role.create({ name }));
            } catch (e) {
              throw new Error("Createting failed!");
            }
          } else {
            throw new Error("Invalid parameters have been supplied!");
          }
        } catch (e) {
          throw new Error("Validation failed!");
        }
      } else {
        throw new Error("This userid does not match this password!");
      }
    } catch (e) {
      throw new Error("Authentication failed!");
    }
  } catch (e) {
    throw new Error("Mapping failed!");
  }
};

export { composeCreateRole, IComposeCreateRoleParams };
