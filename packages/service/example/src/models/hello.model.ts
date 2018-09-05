import { Schema, model } from "mongoose"; // Be sure to not import { database } from "../index" as database would be null!

const helloSchema = new Schema({
  name: String
});

const Hello = model("Hello", helloSchema);

export { Hello };
