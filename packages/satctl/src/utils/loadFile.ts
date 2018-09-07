import { safeLoad } from "js-yaml";
import { existsSync, readFileSync } from "fs";
import { ILoadFile } from "../types/loadFile.types";

const loadFile: ILoadFile = path =>
  existsSync(path as string)
    ? safeLoad(readFileSync(path as string, "utf-8"))
    : false;

export { loadFile };
