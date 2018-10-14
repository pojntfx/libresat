# LibreSat Service

A minimal, modular and optionally opinionated library for building [microservices](https://en.wikipedia.org/wiki/Microservices) for [microplatforms](https://jaxenter.com/microservices-monorepo-microplatform-137920.html) based on [GraphQL](https://graphql.org/) via [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/). If you want to, it allows you to easily use the MTRC (Model - TypeDef - Resolver - Controller) paradigm to make your microservices maintainable and reduce boilerplate to the absolute minimum.

[![Part of LibreSat](https://img.shields.io/badge/Part%20Of-LibreSat-blue.svg)](https://libresat.space)

## Usage

See [global README](../../README.md).

## Documentation

First, setup a project directory:

```bash
$ mkdir todos
$ cd todos
```

```bash
$ git init
(...)
$ npm init
(...)
```

Next, add LibreSat Service and TypeScript:

```bash
$ npm i -s @libresat/service
$ npm i -D typescript
$ echo \
'{
  "extends": "./node_modules/@libresat/service/tsconfig.json"
}' > tsconfig.json
```

Now, add an `index.ts` and `start.ts` script:

```bash
$ mkdir src/
$ echo \
'import { GraphQLMongoDB as Service, loadPath } from "@libresat/service";

const service = new Service(
  "libresat-todos",
  3000,
  "mongodb://localhost:27017",
  loadPath(__dirname, "typeDefs"),
  loadPath(__dirname, "resolvers")
);

export { service };
' > src/index.ts
```

```bash
$ echo \
'import { service } from "./index";
const {
  name,
  description: pkgDescription,
  version,
  author,
  license,
  homepage
} = require("../package.json");

const description = `LibreSat Todos
${pkgDescription}

  Usage: libresat-todos [OPTION...]

  -p,     --port            Port to run the GraphQL server on
  -db,    --database-url    MongoDB server to connect to
  -hds,   --headers         Whether to use HTTP headers for authentication or not

Version: ${name}#${version} by ${author}
License: ${license}
More info: ${homepage}`;

service.startWithArgs(description, process.argv);
' > src/start.ts
```

Nice, you can start adding some MRTCs! Consider checking out [LibreSat Identity](https://gitlab.com/libresat/libresat/tree/master/packages/identity) for a complete example and best practices.
