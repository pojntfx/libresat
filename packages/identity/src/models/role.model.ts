import { mongoose as database } from "@libresat/service";

const RoleMetadataSchema = new database.Schema({
  name: String,
  description: String
});

const RoleSpecAccess = [
  "READUSER",
  "WRITEUSER",
  "READCLOUD",
  "WRITECLOUD",
  "READCLUSTER",
  "WRITECLUSTER",
  "READHOST",
  "WRITEHOST"
];

const RoleSpecSelector = new database.Schema({
  organization: String
});

const RoleSpecSchema = new database.Schema({
  selector: RoleSpecSelector, // ID of an organisation
  email: String,
  secret: String,
  access: [
    {
      type: String,
      enum: RoleSpecAccess,
      required: false
    }
  ]
});

const RoleSchema = new database.Schema({
  apiVersion: String,
  metadata: RoleMetadataSchema,
  spec: RoleSpecSchema
});

const RoleModel = database.model("Role", RoleSchema);

export { RoleSchema, RoleModel };
