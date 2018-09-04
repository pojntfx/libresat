import { join } from "path";
import { LoadPathParam } from "./loadPath.types";
import { fileLoader } from "merge-graphql-schemas";

const loadPath = (dirname: LoadPathParam, path: LoadPathParam) =>
  fileLoader(join(dirname, path), { all: true });

export { loadPath };
