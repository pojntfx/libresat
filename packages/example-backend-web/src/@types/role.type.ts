import { IRole } from "@libresat/example-backend-core";

interface IProvidedRole {
  name?: IRole["name"];
}

interface IValidatedRole {
  name: IRole["name"];
}

interface IMappedRole extends IValidatedRole {}

interface IAuthedRole extends IMappedRole {}

export { IProvidedRole, IValidatedRole, IMappedRole, IAuthedRole };
