import { mongoose as database } from "@libresat/service";

const userSchema = new database.Schema({
  name: String
});

const User = database.model("User", userSchema);

export { User };
