import { IService } from "../service/service.types";

interface IPredefinedStarter {
  (): any;
}

interface IPredefined extends IService {
  start: IPredefinedStarter;
}

export { IPredefined, IPredefinedStarter };
