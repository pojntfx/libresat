import { service } from "./index";

const description = `LibreSat Identity
@libresat/identity#0.0.1-11

  Usage: identity [OPTION...]

  -p,     --port            Port to run the GraphQL server on
  -db,    --database-url    MongoDB server to connect to
  -hds,   --headers         Whether to use HTTP headers for authentication or not

More info: https://libresat.space/docs/services/identity`;

service.startWithArgs(description, process.argv);
