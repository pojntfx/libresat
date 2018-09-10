import { mongoose as database } from "@libresat/service";

const { Schema, model } = database;

const RoleSchema = new Schema({
  name: String,
  organization: {
    type: Schema.Types.ObjectId,
    ref: "Organization"
  }
});

const RoleModel = database.model("Role", RoleSchema);

export { RoleModel };
