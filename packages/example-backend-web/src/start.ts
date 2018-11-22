#!/usr/bin/node
import { service } from "./index";
import {
  name,
  description as pkgDescription,
  version,
  author,
  license,
  homepage
} from "../package.json";

const description = `LibreSat Example Backend Web
${pkgDescription}

  Usage: libresat-example-backend-web [OPTION...]

  -p,     --port            Port to run the GraphQL server on
  -db,    --database-url    MongoDB server to connect to
  -hds,   --headers         Whether to use HTTP headers for authentication or not

Version: ${name}#${version} by ${author}
License: ${license}
More info: ${homepage}`;

service.startWithArgs(description, process.argv);
