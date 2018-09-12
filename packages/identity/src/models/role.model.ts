import { mongoose as database } from "@libresat/service";

const { Schema } = database;

const RoleSchema = new Schema({
  name: String,
  organization: {
    type: Schema.Types.ObjectId,
    ref: "Organization"
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const RoleModel = database.model("Role", RoleSchema);

export { RoleModel };
