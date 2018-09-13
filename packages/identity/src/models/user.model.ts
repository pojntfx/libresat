import { mongoose as database } from "@libresat/service";

const { Schema } = database;

const UserSchema = new Schema({
  name: String,
  password: String,
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role"
    }
  ]
});

const UserModel = database.model("User", UserSchema);

export { UserModel };
