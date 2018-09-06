import { DeployableModel } from "../models/deployable.model";
import {
  Validator,
  HostValidator,
  Host,
  deployableFactory
} from "@libresat/host-agent-core";
import { UnknownDeployableError } from "../errors/unknownDeployableError";
import { DeployableTypeNotSpecifiedError } from "../errors/deployableTypeNotSpecifiedError";
import { FileNotFoundError } from "../errors/fileNotFoundErrror";

class DeployableController {
  static create(content) {
    const deployable = this.validateAndConvert(content);
    return new DeployableModel(deployable.kind, deployable);
  }

  static validateAndConvert(file) {
    if (file !== false) {
      if ("kind" in file) {
        const type = file.kind;
        switch (type) {
          case "Host": {
            new Validator(file, HostValidator).evaluate();
            return deployableFactory(Host, file);
          }
        }
        throw new UnknownDeployableError();
      } else {
        throw new DeployableTypeNotSpecifiedError();
      }
    } else {
      throw new FileNotFoundError();
    }
  }
}

export { DeployableController };
