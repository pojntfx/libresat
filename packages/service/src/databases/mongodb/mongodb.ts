import { IMongoDB } from "./mongodb.types";
import * as mongoose from "mongoose";

class MongoDB implements IMongoDB {
  database!: IMongoDB["database"];

  constructor(public name: IMongoDB["name"], public url: IMongoDB["url"]) {}

  connect() {
    mongoose.connect(this.url);
    this.database = mongoose;
    console.log(`${this.name} is connected to ${this.url}!`);
    return mongoose.connection;
  }

  start() {
    this.connect();
    return this;
  }
}

export { MongoDB };
