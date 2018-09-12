import { mongoose as database } from "@libresat/service";

const { Schema } = database;

const UserSchema = new Schema({
  name: String,
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role"
    }
  ]
});

const UserModel = database.model("User", UserSchema);

export { UserModel };
