import { PublicKey } from "./publicKey.types";
import { IDeployable, Deployable } from "./deployable.types";

interface IHostSpec {
  ip: string;
  publicKey: PublicKey;
}
``;
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

type HostName = IHost["metadata"]["name"];

interface IHostRef {
  name: HostName;
}

export { IHost, Host, IHostRef };
