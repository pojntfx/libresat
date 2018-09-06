import { safeLoad } from "js-yaml";
import { existsSync, readFileSync } from "fs";

const loadFile = (path: string) =>
  safeLoad(existsSync(path) ? readFileSync(path, "utf-8") : false);

export { loadFile };
