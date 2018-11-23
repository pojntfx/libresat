import { IProvidedRole, IValidatedRole } from "../@types";

const validateCreateRole = async (
  providedRole: IProvidedRole
): Promise<IValidatedRole> => providedRole as IValidatedRole;

export { validateCreateRole };
