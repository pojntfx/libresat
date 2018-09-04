import { IService } from "../service/service.types";

interface IDatabase extends IService {
  name: string;
  url: string;
}

export { IDatabase };
