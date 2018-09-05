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

interface IDeployableFactory {
  (DeployableClass: typeof Deployable, rawDeployable: IDeployable): IDeployable;
}

class Deployable implements IDeployable {
  constructor(
    public apiVersion: IDeployable["apiVersion"],
    public kind: IDeployable["kind"],
    public metadata: IDeployable["metadata"],
    public spec: IDeployable["spec"]
  ) {}
}

type PublicKey = string;

interface IHostSpec {
  ip: string;
  publicKey: PublicKey;
}

interface IHost extends IDeployable {
  spec: IHostSpec;
}

class Host extends Deployable implements IHost {
  constructor(
    public apiVersion: IHost["apiVersion"],
    public kind: IHost["kind"],
    public metadata: IHost["metadata"],
    public spec: IHost["spec"]
  ) {
    super(apiVersion, kind, metadata, spec);
  }
}

type IValidator = [string[], string[][][]?];

const HostValidator: IValidator = [
  ["apiVersion", "kind"],
  [[["metadata"], ["name", "description"]], [["spec"], ["ip", "publicKey"]]]
];

type HostName = IHost["metadata"]["name"];

interface ICloudSpec {
  domain: string;
  hosts: HostName[];
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

type CloudName = ICloud["metadata"]["name"];

interface ICloudDeployableMetadata extends IMetadata {
  cloud: CloudName;
}

interface ICloudDeployable extends IDeployable {
  metadata: ICloudDeployableMetadata;
}

interface IUserSpec {
  email: string;
  publicKey: PublicKey;
}

interface IUser extends ICloudDeployable {
  spec: IUserSpec;
}

class User extends Deployable implements IUser {
  constructor(
    public apiVersion: IUser["apiVersion"],
    public kind: IUser["kind"],
    public metadata: IUser["metadata"],
    public spec: IUser["spec"]
  ) {
    super(apiVersion, kind, metadata, spec);
  }
}

interface IClusterProvider {
  provider: string;
  token: string;
}

interface IClusterSpec {
  domain: ICloudSpec["domain"];
  hosts: ICloudSpec["hosts"];
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

export {
  IDeployableFactory,
  Deployable,
  IHost,
  Host,
  Cloud,
  User,
  Cluster,
  IValidator,
  HostValidator
};
