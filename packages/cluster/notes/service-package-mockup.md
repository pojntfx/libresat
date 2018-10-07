# LibreSat Service

A minimal, modular and optionally opinionated microservice development library, based on Apollo GraphQL and MongoDB.

## Features

- MVRT (Model - View - Resolver - TypeDefs)
- CLI integration
- Single binary export
- TypeScript

## Tools to Interact With

- @libresat/service/Service
- @libresat/service/loadFile
- @libresat/service/database
- @libresat/service/CLI
- @libresat/service/log
- @libresat/service/serviceStart

## Folder Structure

```bash
$ ls
node_modules/
organization/
organization.model.ts
organization.controller.ts
organization.resolver.ts
organization.d.ts
organization.typeDefs.graphql
start.ts
index.ts
package.json
package-lock.json
tsconfig.json
README.md
```

## Usage

```bash
$ mkdir identity
$ cd identity
$ npm init
```

```bash
$ npm i -s @libresat/service
$ npm i -s @libresat/service
$ npm i -D typescript
$ echo \
"{
"extends": "node_modules/@libresat/service/tsconfig.json"
}" > tsconfig.json
```

```bash
$ echo \
'import { GraphQLMongoDB as Service, loadPath } from "@libresat/service";

const service = new Service(
"libresat-identity",
3000,
"mongodb://localhost:27017",
loadPath(**dirname, "typeDefs"),
loadPath(**dirname, "resolvers")
);

export { service };' > index.ts
```

```bash
$ echo \
'import { service } from "./index";
import { flag } from "@libresat/service";

const description = `LibreSat Identity
@libresat/identity-backend#0.0.1-10

Usage: identity [OPTION...]

-p, --port Port to run the GraphQL server on
--db-url, --database-url MongoDB server to connect to

More info: https://libresat.space/docs/services/identity`

const help = flags(["-h", "--help"])

if (!help) {
const port = flags(["-p", "--port"], port => isNaN(port))
const dbUrl = flags(["--db-url", "--database-url"], dbUrl => /mongodb:\/\/.\*:\d+/.test(dbUrl))
service.start(port, dbUrl)
} else {
console.log(description)
}' > start.ts
```

```bash
$ mkdir organization # Add MVRT
$ mkdir roles # Add MVRT
```

## Startup

```bash
$ service dev
$ service build
$ service build:binary
$ service start
$ service start:binary
$ service install:binary
```
