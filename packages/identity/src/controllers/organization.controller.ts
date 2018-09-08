import { OrganizationModel } from "../models/organization.model";
import {
  IOrganizationCreator,
  IOrganization,
  IOrganizationRoleAdder
} from "../types/organization.types";

class Organization {
  static create: IOrganizationCreator = async params => {
    const organization = new OrganizationModel(params);
    await organization.save();
    return (await OrganizationModel.findById(
      organization._id
    )) as IOrganization;
  };
  static getAll = async () => await OrganizationModel.find();
  static addRole: IOrganizationRoleAdder = async (id, role) => {
    const organization = (await OrganizationModel.findById(
      id
    )) as IOrganization;
    organization.spec.roles.push(role);
    await organization.save();
    return organization as IOrganization;
  };
}

export { Organization };
