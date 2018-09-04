import { IMongoDB } from "./mongodb.types";

class MongoDB implements IMongoDB {
  name: "mongodb";
  models: any[];
  url: string;
}

export { MongoDB };
