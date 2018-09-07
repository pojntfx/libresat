interface IMetadata {
  name: string;
  description: string;
}

interface IDeployable {
  apiVersion: string;
  kind: string;
  metadata: IMetadata;
  spec: any;
}

class Deployable implements IDeployable {
  constructor(
    public apiVersion: IDeployable["apiVersion"],
    public kind: IDeployable["kind"],
    public metadata: IDeployable["metadata"],
    public spec: IDeployable["spec"]
  ) {}
}

export { IMetadata, IDeployable, Deployable };
