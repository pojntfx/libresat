import { IDeployable } from "../types";

class DeployableModel implements IDeployable {
  constructor(public type, public content) {}
}

export { DeployableModel };
