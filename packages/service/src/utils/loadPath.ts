import { join } from "path";
import { LoadPathParam } from "./loadPath.types";

const loadPath = (path: LoadPathParam) => join(__dirname, path);

export { loadPath };
