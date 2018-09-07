import { Deployable } from "../types/deployable.types";
import { IHostRef } from "./host.types";
import { ICloudSpec, ICloudDeployable } from "./cloud.types";

interface IClusterProvider {
  provider: string;
  token: string;
}

interface IClusterHostRef extends IHostRef {
  role: string;
}

interface IClusterSpec {
  domain: ICloudSpec["domain"];
  hosts: IClusterHostRef[];
  storage: IClusterProvider;
  acme: IClusterProvider;
}

interface ICluster extends ICloudDeployable {
  spec: IClusterSpec;
}

class Cluster extends Deployable implements ICluster {
  constructor(
    public apiVersion: ICluster["apiVersion"],
    public kind: ICluster["kind"],
    public metadata: ICluster["metadata"],
    public spec: ICluster["spec"]
  ) {
    super(apiVersion, kind, metadata, spec);
  }
}

export { ICluster, Cluster };
