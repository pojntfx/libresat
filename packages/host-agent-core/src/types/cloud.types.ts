import { IHostRef } from "./host.types";
import { Deployable, IDeployable, IMetadata } from "./deployable.types";

interface ICloudSpec {
  domain: string;
  hosts: IHostRef[];
}

interface ICloud extends IDeployable {
  spec: ICloudSpec;
}

class Cloud extends Deployable implements ICloud {
  constructor(
    public apiVersion: ICloud["apiVersion"],
    public kind: ICloud["kind"],
    public metadata: ICloud["metadata"],
    public spec: ICloud["spec"]
  ) {
    super(apiVersion, kind, metadata, spec);
  }
}

interface ICloudDeployableMetadata extends IMetadata {
  cloud: CloudName;
}

interface ICloudDeployable extends IDeployable {
  metadata: ICloudDeployableMetadata;
}

type CloudName = ICloud["metadata"]["name"];

export { ICloud, ICloudSpec, Cloud, CloudName, ICloudDeployable };
