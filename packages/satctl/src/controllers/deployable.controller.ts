import { DeployableModel } from "../models/deployable.model";
import {
  Validator,
  Host,
  Cloud,
  User,
  Cluster,
  deployableFactory
} from "@libresat/host-agent-core";
import { UnknownDeployableError } from "../errors/unknownDeployableError";
import { DeployableTypeNotSpecifiedError } from "../errors/deployableTypeNotSpecifiedError";
import { FileNotFoundError } from "../errors/fileNotFoundErrror";
import { IDeployable } from "../types/deployable.types";
import { IFile } from "../types/file.types";

class DeployableController {
  static create(content: IDeployable["content"]) {
    const deployable = this.validateAndConvert(content);
    return new DeployableModel(deployable.kind, deployable);
  }

  static validateAndConvert(file: IFile["content"]): any {
    if (file !== false) {
      if ("kind" in file) {
        const type = file.kind;
        switch (type) {
          case "Host": {
            new Validator(
              "https://standards.libresat.space/satctl/v0.0.1-0",
              file.kind
            ).validate(file);
            return deployableFactory(Host, file);
          }
          case "Cloud": {
            new Validator(
              "https://standards.libresat.space/satctl/v0.0.1-0",
              file.kind
            ).validate(file);
            return deployableFactory(Cloud, file);
          }
          case "User": {
            new Validator(
              "https://standards.libresat.space/satctl/v0.0.1-0",
              file.kind
            ).validate(file);
            return deployableFactory(User, file);
          }
          case "Cluster": {
            new Validator(
              "https://standards.libresat.space/satctl/v0.0.1-0",
              file.kind
            ).validate(file);
            return deployableFactory(Cluster, file);
          }
          default: {
            throw new UnknownDeployableError();
          }
        }
      } else {
        throw new DeployableTypeNotSpecifiedError();
      }
    } else {
      throw new FileNotFoundError();
    }
  }
}

export { DeployableController };
