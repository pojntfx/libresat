import { IDatabase } from "../database.types";

interface IMongoDB extends IDatabase {
  models: any[];
}

export { IMongoDB };
