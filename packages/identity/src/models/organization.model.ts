import { mongoose as database } from "@libresat/service";
import { RoleSchema } from "./role.model";

const OrganizationMetadataSchema = new database.Schema({
  name: String,
  description: String
});

const OrganizationSpecSchema = new database.Schema({
  email: String,
  secret: String,
  roles: {
    type: [RoleSchema],
    default: []
  }
});

const OrganizationSchema = new database.Schema({
  apiVersion: String,
  metadata: OrganizationMetadataSchema,
  spec: OrganizationSpecSchema
});

const OrganizationModel = database.model("Organization", OrganizationSchema);

export { OrganizationModel };
