import { IDeployable } from "../types/deployable.types";

class DeployableModel implements IDeployable {
  constructor(
    public type: IDeployable["type"],
    public content: IDeployable["content"]
  ) {}
}

export { DeployableModel };
