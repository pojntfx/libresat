import { join } from "path";
import { LoadPathParam } from "./loadPath.types";

const loadPath = (dirname: LoadPathParam, path: LoadPathParam) =>
  join(dirname, path);

export { loadPath };
