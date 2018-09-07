import { DeployableModel } from "../models/deployable.model";
import { Validator, Host, deployableFactory } from "@libresat/host-agent-core";
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
    // return new DeployableModel(deployable.kind, deployable);
  }

  static validateAndConvert(file) {
    if (file !== false) {
      if ("kind" in file) {
        const type = file.kind;
        switch (type) {
          case "Host": {
            return new Validator(
              "https://standards.libresat.space/satctl/v0.0.1-0",
              HostSchema
            ).validate(file);
          }
        }
      }
    } else {
      throw new FileNotFoundError();
    }
  }
}

export { DeployableController };
