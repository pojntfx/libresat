import { service } from "../index";

const args = process.argv.slice(2);

const port: number =
  parseInt(args[args.indexOf("--port") + 1]) ||
  parseInt(args[args.indexOf("-p") + 1]);

const dbUrl: string =
  args[args.indexOf("--db-url") + 1] ||
  args[args.indexOf("--database-url") + 1];

service.start(
  !isNaN(port) ? port : 3000,
  /mongodb:\/\/.*:\d+/.test(dbUrl) ? dbUrl : "mongodb://localhost:27017"
);
