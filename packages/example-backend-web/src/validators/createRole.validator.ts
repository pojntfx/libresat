import { IProvidedRole, IValidatedRole } from "../@types";

const validateCreateRole = async (
  providedRole: IProvidedRole
): Promise<IValidatedRole> => {
  if (providedRole.name) {
    return providedRole as IValidatedRole;
  } else {
    throw new Error("Name is missing in provided role!!");
  }
};

export { validateCreateRole };
