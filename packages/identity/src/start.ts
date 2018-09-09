import { GraphQLMongoDBFlagParser as FlagParser } from "@libresat/service";
import { service } from "./index";

const description = `LibreSat Identity
@libresat/identity#0.0.1-11

Usage: identity [OPTION...]

-p,       --port         Port to run the GraphQL server on
--db-url, --database-url MongoDB server to connect to

More info: https://libresat.space/docs/services/identity`;

const flagParser = new FlagParser(process.argv);

const help = flagParser.getFlag("-h", () => true, () => true);

if (!help && flagParser.flagsHaveBeenProvided()) {
  try {
    const port = flagParser.getFlag(
      "-p",
      (arg: any) => !isNaN(parseInt(arg)),
      (arg: any) => arg
    );
    const dbUrl = flagParser.getFlag(
      "--db-url",
      (arg: any) => /mongodb:\/\/.*:\d+/.test(arg),
      (arg: any) => arg
    );
    service.start(port, dbUrl);
  } catch (e) {
    console.error(e);
  }
} else {
  console.log(description);
}
