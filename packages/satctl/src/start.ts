import * as fs from "fs";
import * as path from "path";

const project = path.join(__dirname, "../tsconfig.json");
const dev = fs.existsSync(project);

import { Main } from "./index";

try {
  Main.run();
} catch (e) {
  require("@oclif/errors/handle");
}
