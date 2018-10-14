import * as express from "express";
import * as path from "path";

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname));
  app.get("*", (_, res) => res.sendFile(path.join(__dirname + "/index.html")));
} else {
  app.use(express.static(__dirname + "/../dist"));
  app.get("*", (_, res) =>
    res.sendFile(path.join(__dirname + "/../dist/index.html"))
  );
}

const {
  name,
  description: pkgDescription,
  version,
  author,
  license,
  homepage
} = require("../package.json");

const description = `LibreSat Identity Frontend
${pkgDescription}

Started successfully on port 5000!

Version: ${name}#${version} by ${author}
License: ${license}
More info: ${homepage}`;

const server = app.listen(5000, () => console.log(description));

export { server };
