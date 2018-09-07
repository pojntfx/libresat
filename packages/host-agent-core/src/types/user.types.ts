import { ICloudDeployable } from "./cloud.types";
import { PublicKey } from "./publicKey.types";
import { Deployable } from "./deployable.types";

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

export { IUser, User };
