#!/usr/bin/node
import { service } from "./index";
const {
  name,
  description: pkgDescription,
  version,
  author,
  license,
  homepage
} = require("../package.json");

const description = `LibreSat Identity Backend
${pkgDescription}

  Usage: libresat-identity-backend [OPTION...]

  -p,     --port            Port to run the GraphQL server on
  -db,    --database-url    MongoDB server to connect to
  -hds,   --headers         Whether to use HTTP headers for authentication or not

Version: ${name}#${version} by ${author}
License: ${license}
More info: ${homepage}`;

service.startWithArgs(description, process.argv);
