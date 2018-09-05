import { Command, flags } from "@oclif/command";
import { loadFile } from "./utils";
const { version, help } = flags;
import { Host, deployableFactory } from "@libresat/host-agent-core";

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

  handleFile(file) {
    const instanceOfHost = (object: Host): object is Host =>
      // console.log(Host)
      "spec" in object ? true : false;

    if (instanceOfHost(file)) {
      const host1 = deployableFactory(Host, file);
      if (instanceOfHost(host1)) {
        console.log(host1);
      }
    }
  }

  async run() {
    const {
      args: { file }
    } = super.parse(Main);

    if (file) {
      this.handleFile(loadFile(file));
    } else {
      super.warn("Please provide a YAML file to parse.");
    }
  }
}

export { Main };
