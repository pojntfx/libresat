import { IMongoDB } from "./mongodb.types";

class MongoDB implements IMongoDB {
  name: IMongoDB["name"];
  models: IMongoDB["models"];
  url: IMongoDB["url"];

  constructor({ name, models, url }: IMongoDB) {
    this.name = name;
    this.models = models;
    this.url = url;
  }
}

export { MongoDB };
