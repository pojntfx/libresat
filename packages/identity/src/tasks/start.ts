import { service } from "../index";

const args = process.argv.slice(2);

if (args.length <= 2 || args.includes("-h") || args.includes("--help")) {
  console.log(`LibreSat Identity
@libresat/identity#0.0.1-10

Usage: identity [OPTION...]

  -p,       --port          Port to run the GraphQL server on
  --db-url, --database-url  MongoDB server to connect to

More info: https://libresat.space/docs/services/identity`);
} else {
  const port: number =
    parseInt(args[args.indexOf("--port") + 1]) ||
    parseInt(args[args.indexOf("-p") + 1]);

  const dbUrl: string =
    args[args.indexOf("--db-url") + 1] ||
    args[args.indexOf("--database-url") + 1];
  try {
    service.start(
      !isNaN(port) ? port : 3000,
      /mongodb:\/\/.*:\d+/.test(dbUrl) ? dbUrl : "mongodb://localhost:27017"
    );
  } catch (e) {
    console.log(e);
  }
}
