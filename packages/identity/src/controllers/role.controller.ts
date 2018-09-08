import { RoleModel } from "../models/role.model";
import { IRoleCreator, IRole } from "../types/role.types";
import { Organization } from "./organization.controller";

class Role {
  static create: IRoleCreator = async params => {
    const organizationId = params.spec.selector.organization;
    const role = new RoleModel(params);
    const organization = await Organization.addRole(
      organizationId,
      role as any
    );
    if (organization) {
      return await organization.save();
    }
  };
}

export { Role };
