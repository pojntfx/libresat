import { IService } from "../service/service.types";

interface IDatabaseConnector {
  (): any;
}

interface IDatabaseStarter {
  (): any;
}
interface IDatabase extends IService {
  name: string;
  url: string;
  database: any;
  connect: IDatabaseConnector;
  start: IDatabaseStarter;
}

export { IDatabase };
