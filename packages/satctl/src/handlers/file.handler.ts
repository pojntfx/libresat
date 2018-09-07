import { DeployableController } from "../controllers/deployable.controller";
import { UnknownDeployableError } from "../errors/unknownDeployableError";
import { DeployableTypeNotSpecifiedError } from "../errors/deployableTypeNotSpecifiedError";
import Command from "@oclif/command";
import {
  DeployableDidNotPassValidationError,
  IncompatibleAPIVersionError
} from "@libresat/host-agent-core";

class FileHandler {
  constructor(private cli: Command) {}

  resolve(file: any) {
    try {
      const { type, content } = DeployableController.create(file);
      this.cli.log(type, JSON.stringify(content, null, 2));
    } catch (e) {
      if (
        e instanceof UnknownDeployableError ||
        e instanceof DeployableTypeNotSpecifiedError ||
        e instanceof DeployableDidNotPassValidationError ||
        e instanceof IncompatibleAPIVersionError
      ) {
        this.cli.warn(
          `${e}. Aborting, please check whether deployable is implemented correctly!`
        );
      } else {
        console.log(e);
      }
    }
  }
}

export { FileHandler };
