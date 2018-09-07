import { IDeployable } from "../types/deployable.types";

class DeployableModel implements IDeployable {
  constructor(public type, public content) {}
}

export { DeployableModel };
