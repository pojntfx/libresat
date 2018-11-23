import { IRole } from "@libresat/example-backend-core";

interface IValidateCreateRoleParams {
  id: IRole["id"];
}

const validateCreateRole = async (
  id: IValidateCreateRoleParams["id"]
): Promise<boolean> => true;

export { validateCreateRole };
