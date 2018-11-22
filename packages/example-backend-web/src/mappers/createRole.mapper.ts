import { IValidatedRole, IMappedRole } from "../@types";

const mapCreateRole = async (
  validatedRole: IValidatedRole
): Promise<IMappedRole> => validatedRole;

export { mapCreateRole };
