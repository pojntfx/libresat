import { mongoose as database } from "@libresat/service";

const { Schema } = database;

const OrganizationSchema = new Schema({
  name: { type: String, unique: true },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role"
    }
  ]
});

const OrganizationModel = database.model("Organization", OrganizationSchema);

export { OrganizationModel };
