import { Host } from "./types";
import { deployableFactory } from "./utils";

const input1 = {
  apiVersion: "https://standards.libresat.space/satctl/v0.0.1-0",
  kind: "Host",
  metadata: {
    name: "host1",
    description: "Host 1"
  },
  spec: {
    ip: "206.189.226.226",
    publicKey: "ssh-rsa AAA3Dx(...)== felix@pojtinger.com"
  }
};

console.log(deployableFactory(Host, input1));
