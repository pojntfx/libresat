import { mongoose as database } from "@libresat/service";

const { Schema } = database;

const RoleSchema = new Schema({
  name: String,
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  organizations: [
    {
      type: Schema.Types.ObjectId,
      ref: "Organization"
    }
  ]
});

const RoleModel = database.model("Role", RoleSchema);

export { RoleModel };
