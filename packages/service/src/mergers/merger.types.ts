import { IUtil } from "../utils/util.types";
import { IService } from "../service/service.types";
import { LoadPathParam } from "../utils/loadPath.types";

interface IMerge {
  (): any;
}

interface IMerger extends IUtil {
  service: IService;
  dir: LoadPathParam;
  merge: IMerge;
}

export { IMerger };
