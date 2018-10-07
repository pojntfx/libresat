import { parseCredentials } from "../utils/parseCredentials.util";
import { NoPasswordProvidedError } from "../errors/NoPasswordProvided.error";
import { NoUserIdProvidedError } from "../errors/NoUserIdProvided.error";
import { NoCredentialsProvidedError } from "../errors/NoCredentialsProvided.error";
import { IGraphQLMongoDBControllerParamsWithAuthorizationHeader } from "../types/user.type";

const fakeParams = {
  context: {
    headers: {
      password: "password1",
      userid: "5bb261e56d4e3b12b5bb5cc7"
    }
  }
};

const fakeParamsWithoutPassword = {
  context: {
    headers: {
      userid: "5bb261e56d4e3b12b5bb5cc7"
    }
  }
};

const fakeParamsWithoutUserId = {
  context: {
    headers: {
      password: "password1"
    }
  }
};

const fakeParamsWithoutContext = {};

const fakeParsedCredentials = {
  userId: fakeParams.context.headers.userid,
  password: fakeParams.context.headers.password
};

it("Should parse userId and password if provided", async () =>
  expect(await parseCredentials(fakeParams)).toEqual(fakeParsedCredentials));

it("Should throw error if password not provided", () =>
  expect(
    parseCredentials(
      fakeParamsWithoutPassword as IGraphQLMongoDBControllerParamsWithAuthorizationHeader
    )
  ).rejects.toEqual(new NoPasswordProvidedError()));

it("Should throw error if userId not provided", () =>
  expect(
    parseCredentials(
      fakeParamsWithoutUserId as IGraphQLMongoDBControllerParamsWithAuthorizationHeader
    )
  ).rejects.toEqual(new NoUserIdProvidedError()));

it("Should throw error if neither a userId nor a password are provided", () =>
  expect(
    parseCredentials(
      fakeParamsWithoutContext as IGraphQLMongoDBControllerParamsWithAuthorizationHeader
    )
  ).rejects.toEqual(new NoCredentialsProvidedError()));

export { fakeParams, fakeParamsWithoutContext, fakeParamsWithoutPassword };
