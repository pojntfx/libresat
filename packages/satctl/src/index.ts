import { Command, flags } from "@oclif/command";
import { loadFile } from "./utils/loadFile";
const { version, help } = flags;
import { ObjectDoesNotPassTypeGuardError } from "@libresat/host-agent-core";
import { DeployableController } from "./controllers/deployable.controller";
import { UnknownDeployableError } from "./errors/unknownDeployableError";
import { DeployableTypeNotSpecifiedError } from "./errors/deployableTypeNotSpecifiedError";

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
    try {
      const { type, content } = DeployableController.create(file);
      this.log(type, JSON.stringify(content, null, 2));
    } catch (e) {
      if (
        e instanceof UnknownDeployableError ||
        DeployableTypeNotSpecifiedError ||
        ObjectDoesNotPassTypeGuardError
      ) {
        this.warn(
          `${e}. Aborting, please check whether deployable is implemented correctly!`
        );
      } else {
        throw e;
      }
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
