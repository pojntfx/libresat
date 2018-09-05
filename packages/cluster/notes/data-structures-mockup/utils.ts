import { IDeployableFactory } from "./types";

const deployableFactory: IDeployableFactory = (
  DeployableClass,
  rawDeployable
) => {
  let args: [any, any, any, any] = [
    ...Object.keys(rawDeployable).map(key => rawDeployable[key])
  ] as [any, any, any, any];

  return new DeployableClass(...args);
};

export { deployableFactory };
