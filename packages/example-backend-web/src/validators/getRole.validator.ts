import { IRole } from "@libresat/example-backend-core";

interface IValidateGetRoleParams {
  id: IRole["id"];
}

const validateGetRole = async (
  id: IValidateGetRoleParams["id"]
): Promise<boolean> => true;

export { validateGetRole };
