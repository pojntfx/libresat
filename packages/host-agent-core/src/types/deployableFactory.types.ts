import { Deployable, IDeployable } from "./deployable.types";

interface IDeployableFactory {
  (DeployableClass: typeof Deployable, rawDeployable: IDeployable): IDeployable;
}

export { IDeployableFactory };
