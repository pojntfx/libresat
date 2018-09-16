import { mongoose as database } from "@libresat/service";

const { Schema } = database;

const UserSchema = new Schema({
  name: { type: String, unique: true },
  password: String,
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role",
      unique: true
    }
  ],
  organizations: [
    {
      type: Schema.Types.ObjectId,
      ref: "Organization",
      unique: true
    }
  ]
});

const UserModel = database.model("User", UserSchema);

export { UserModel };
