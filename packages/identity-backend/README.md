# LibreSat Identity Backend

Simple and secure role-based authentication, authorization & identity provider implemented as a GraphQL microservice for [LibreSat](https://libresat.space/).

[![Demo Site](https://img.shields.io/badge/Demo%20Site-Not%20Available-red.svg)](https://libresat.space)
[![Code License AGPL-3.0](https://img.shields.io/badge/Code%20License-AGPL--3.0-brightgreen.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)
[![Media License CC-BY-SA-4.0](https://img.shields.io/badge/Media%20License-CC--BY--SA--4.0-brightgreen.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Part of LibreSat](https://img.shields.io/badge/Part%20Of-LibreSat-blue.svg)](https://gitlab.com/libresat/libresat)
[![Infrastructure Overview](https://img.shields.io/badge/Support-Infrastructure%20Overview-blue.svg)](https://libresat.space/docs/infrastructure)

## Usage

```bash
# Install dependencies
npm install
# Build and serve development version on http://localhost:3000
npm run dev
# Build and serve production version on http://localhost:3000
npm run build
npm start
```

## Documentation

### Models

| Name    | Description                                        | Example          |
| ------- | -------------------------------------------------- | ---------------- |
| `scope` | Group of items that a `user` can have access to    | `privateSection` |
| `role`  | Type of access that a `user` can have in a `scope` | `READ:USERS`     |
| `user`  | Entity with `roles` and `scopes`                   | `yourUsername`   |

### Typical usage

#### Create Scope

First, create a `scope` with the name `scope1`:

**Request:**

```graphql
mutation {
  createScope(name: "scope1") {
    _id
  }
}
```

**Response:**

```json
{
  "data": {
    "createScope": {
      "_id": "5ba566e48d13c2239e6ba95b"
    }
  }
}
```

Note down the ID.

#### Create Role

Secondly, create a `role` with the name `WRITE:EVERYTHING`:

**Request:**

```graphql
mutation {
  createRole(name: "WRITE:EVERYTHING") {
    _id
  }
}
```

**Response:**

```json
{
  "data": {
    "createRole": {
      "_id": "5ba568108d13c2239e6ba95e"
    }
  }
}
```

Note down the ID.

#### Create User

Now, create a `user` with the name `user1` and password `password1`:

**Request:**

```graphql
mutation {
  createUser(name: "user1", password: "password1") {
    _id
    password
  }
}
```

**Response:**

```json
{
  "data": {
    "createUser": {
      "_id": "5ba5685a8d13c2239e6ba95f",
      "password": "$2a$10$Ntq.OQ2krtNkZal/xbsl1OHZb2mjkZ2T5pjhLc5wVopcOLWvVA.y6"
    }
  }
}
```

#### Assign `role` to `scope`

To start linking the models together, assign the role to the scope:

**Request:**

```graphql
mutation {
  assignRoleToScope(
    scopeId: "5ba566e48d13c2239e6ba95b"
    roleId: "5ba568108d13c2239e6ba95e"
  ) {
    name
  }
}
```

**Response:**

```json
{
  "data": {
    "assignRoleToScope": {
      "name": "scope1"
    }
  }
}
```

Now we've got a `role` that is linked to a `scope`.

#### Assign `user` to `scope`

In oder to give the `user` access to the `scope`, we need to assign them to the `scope` as well.

**Request:**

```graphql
mutation {
  assignUserToScope(
    scopeId: "5ba566e48d13c2239e6ba95b"
    userId: "5ba5685a8d13c2239e6ba95f"
  ) {
    name
  }
}
```

**Response:**

```json
{
  "data": {
    "assignUserToScope": {
      "name": "scope1"
    }
  }
}
```

#### Assign `role` to `user`

Now, let's assign the the `WRITE:EVERYTHING` role, which the organization now has, to the `user`. As you might remember, the role specifies which type of access the user should have to the scope (i.e., like in this example, the capability to write to all objects within it):

**Request:**

```graphql
mutation {
  assignRoleToUser(
    roleId: "5ba568108d13c2239e6ba95e"
    userId: "5ba5685a8d13c2239e6ba95f"
  ) {
    name
  }
}
```

**Response:**

```json
{
  "data": {
    "assignRoleToUser": {
      "name": "user1"
    }
  }
}
```

#### Auth a `user` with a `role` inside a `scope`

Hooray! `user1` should now be able to access `scope1` with the `WRITE:EVERYTHING` role. Let's test it!

First, set the HTTP headers for **authentication**:

| Key        | Value                      |
| ---------- | -------------------------- |
| `userid`   | `5ba5685a8d13c2239e6ba95f` |
| `password` | `password1`                |

Next, send a **authorization** mutation:

**Request:**

```graphql
mutation {
  auth(
    scopeId: "5ba566e48d13c2239e6ba95b"
    validRolesNames: ["WRITE:EVERYTHING"]
  ) {
    _id
    name
  }
}
```

**Response:**

```json
{
  "data": {
    "auth": {
      "_id": "5ba5685a8d13c2239e6ba95f",
      "name": "user1"
    }
  }
}
```

It works! We were able to authenticate and authorize a `user` within a `scope` using his `role`. If we specify a role which the user does not support (or the organization does not have), or use the wrong credentials for authentication, we will get an error message:

**Request:**

```graphql
mutation {
  auth(
    scopeId: "5ba566e48d13c2239e6ba95b"
    validRolesNames: ["WRITE:EVERYTHING", "WRITE:ADMIN"]
  ) {
    _id
    name
  }
}
```

**Response:**

```json
{
  "data": null,
  "errors": [
    {
      "message": "Authorization failed, user does not have the necessary priviledges!",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["auth"]
    }
  ]
}
```

Of course, you can do much more using LibreSat Identity. Simply fire up your own instance as described in [Usage](#usage) and check out the GraphQL documentation by visiting it's URL!
