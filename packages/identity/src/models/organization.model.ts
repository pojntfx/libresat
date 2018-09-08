import { mongoose as database } from "@libresat/service";

const OrganizationSchema = new database.Schema({
  apiVersion: String,
  metadata: new database.Schema({
    name: String,
    description: String
  }),
  spec: new database.Schema({
    email: String,
    secret: String
  })
});

OrganizationSchema.index({ "$**": "text" });

const OrganizationModel = database.model("Organization", OrganizationSchema);

export { OrganizationModel };
