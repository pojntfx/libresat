import * as Ajv from "ajv";
import { DeployableModel } from "../models/deployable.model";
import { Host, deployableFactory } from "@libresat/host-agent-core";
import { UnknownDeployableError } from "../errors/unknownDeployableError";
import { DeployableTypeNotSpecifiedError } from "../errors/deployableTypeNotSpecifiedError";
import { FileNotFoundError } from "../errors/fileNotFoundErrror";
import { IncompatibleAPIVersionError } from "../errors/incompatibleAPIVersionError";

const HostSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  additionalProperties: false,
  definitions: {
    IHostSpec: {
      additionalProperties: false,
      properties: {
        ip: {
          type: "string"
        },
        publicKey: {
          type: "string"
        }
      },
      required: ["ip", "publicKey"],
      type: "object"
    },
    IMetadata: {
      additionalProperties: false,
      properties: {
        description: {
          type: "string"
        },
        name: {
          type: "string"
        }
      },
      required: ["description", "name"],
      type: "object"
    }
  },
  properties: {
    apiVersion: {
      type: "string"
    },
    kind: {
      type: "string"
    },
    metadata: {
      $ref: "#/definitions/IMetadata"
    },
    spec: {
      $ref: "#/definitions/IHostSpec"
    }
  },
  required: ["apiVersion", "kind", "metadata", "spec"],
  type: "object"
};

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
            const validator = new Ajv();
            const validate = validator.compile(HostSchema);
            const valid = validate(file);
            console.log(valid);
            if (
              file.apiVersion ===
              "https://standards.libresat.space/satctl/v0.0.1-0"
            ) {
              return deployableFactory(Host, file);
            } else {
              throw new IncompatibleAPIVersionError(file.apiVersion);
            }
          }
          // case "Cloud": {
          //   new Validator(file, CloudValidator).evaluate();
          //   if (
          //     file.apiVersion ===
          //     "https://standards.libresat.space/satctl/v0.0.1-0"
          //   ) {
          //     return deployableFactory(Cloud, file);
          //   } else {
          //     throw new IncompatibleAPIVersionError(file.apiVersion);
          //   }
          // }
          // case "User": {
          //   new Validator(file, UserValidator).evaluate();
          //   if (
          //     file.apiVersion ===
          //     "https://standards.libresat.space/satctl/v0.0.1-0"
          //   ) {
          //     return deployableFactory(User, file);
          //   } else {
          //     throw new IncompatibleAPIVersionError(file.apiVersion);
          //   }
          // }
          // case "Cluster": {
          //   new Validator(file, ClusterValidator).evaluate();
          //   if (
          //     file.apiVersion ===
          //     "https://standards.libresat.space/satctl/v0.0.1-0"
          //   ) {
          //     return deployableFactory(Cluster, file);
          //   } else {
          //     throw new IncompatibleAPIVersionError(file.apiVersion);
          //   }
          // }
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
