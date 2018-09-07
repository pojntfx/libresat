import { mongoose as database } from "@libresat/service";

const organizationMetadataSchema = new database.Schema({
  name: String,
  description: String
});

const organizationSpecSchema = new database.Schema({
  email: String,
  secret: String
});

const organizationSchema = new database.Schema({
  apiVersion: String,
  metadata: organizationMetadataSchema,
  spec: organizationSpecSchema
  // roles: [Role]
});

const OrganizationModel = database.model("Organization", organizationSchema);

export { OrganizationModel };
