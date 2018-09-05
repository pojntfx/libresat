import { Command, flags } from "@oclif/command";
import { loadFile } from "./utils";
const { version, help } = flags;
import { sayHello } from "@libresat/host-agent-core";

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
    } = super.parse(Main);

    super.log(sayHello());

    if (file) {
      super.log(JSON.stringify(loadFile(file), null, 2));
    } else {
      super.warn("Please provide a YAML file to parse.");
    }
  }
}

export { Main };
