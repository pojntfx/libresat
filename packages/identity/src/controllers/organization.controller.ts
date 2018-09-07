import { OrganizationModel } from "../models/organization.model";
import { IOrganizationCreator } from "../types/organization.types";

class Organization {
  static create: IOrganizationCreator = async params => {
    const organization = new OrganizationModel(params);
    await organization.save();
    return await OrganizationModel.findById(organization._id);
  };
  static getAll = async () => OrganizationModel.find();
}

export { Organization };
