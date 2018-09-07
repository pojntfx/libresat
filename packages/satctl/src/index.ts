import { Command, flags } from "@oclif/command";
import { loadFile } from "./utils/loadFile";
import { FileHandler } from "./handlers/file.handler";
const { version, help } = flags;

/**
 * Main command
 */
class Main extends Command {
  static description = `"kubectl"-like CLI to develop or/and control satellites using the LibreSat Platform (https://libresat.space).`;

  static flags = {
    version: version({ char: "v" }),
    help: help({ char: "h" })
  };

  static args = [
    {
      name: "file"
    }
  ];

  async run() {
    const {
      args: { file }
    } = this.parse(Main);

    if (file) {
      new FileHandler(this).resolve(loadFile(file));
    } else {
      this.warn("Please provide a YAML file to parse.");
    }
  }
}

export { Main };
