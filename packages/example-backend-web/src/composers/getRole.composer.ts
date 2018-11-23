import { IResolveGetRoleParams } from "../resolvers";
import { RoleController } from "../controllers";
import { RoleModel } from "../models";
import { IRole, getRole } from "@libresat/example-backend-core";
import { mapGetRole } from "../mappers";
import { authGetRole } from "../auth";
import { validateGetRole } from "../validators";

interface IComposeGetRoleParams extends IResolveGetRoleParams {}

const role = new RoleController(RoleModel);

const composeGetRole = async (
  params: IComposeGetRoleParams["params"],
  context: IComposeGetRoleParams["context"]
): Promise<IRole> => {
  try {
    const { id, auth } = await mapGetRole(params, context);
    try {
      const isAuthed = await authGetRole(auth.userid, auth.userid);
      if (isAuthed) {
        try {
          const isValid = await validateGetRole(id);
          if (isValid) {
            try {
              return await getRole(id, id => role.get(id));
            } catch (e) {
              throw new Error("Getting failed!");
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

export { composeGetRole, IComposeGetRoleParams };
