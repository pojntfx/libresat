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
      "apiVersion" in object &&
      "kind" in object &&
      "metadata" in object &&
      "spec" in object
        ? "name" in object.metadata
          ? "description" in object.metadata
            ? true
            : false
          : false
            ? "ip" in object.spec
              ? "publicKey" in object.spec
                ? true
                : false
              : false
            : false
        : false;

    if (instanceOfHost(file)) {
      const host1 = deployableFactory(Host, file);
      this.log(host1);
    } else {
      this.error("The supplied host is invalid.");
    }
  }

  async run() {
    const {
      args: { file }
    } = this.parse(Main);

    if (file) {
      this.handleFile(loadFile(file));
    } else {
      this.warn("Please provide a YAML file to parse.");
    }
  }
}

export { Main };
