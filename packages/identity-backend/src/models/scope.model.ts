import { mongoose as database } from "@libresat/service";

const { Schema } = database;

const ScopeSchema = new Schema({
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
  ],
  isMeta: { type: Boolean, default: false }
});

const ScopeModel = database.model("Scope", ScopeSchema);

export { ScopeModel };
