import { authenticateUserInUserScope } from "../utils/authenticateUserInUserScope.util";
import {
  fakeParams,
  fakeParamsWithoutPassword,
  fakeParamsWithoutContext
} from "./parseCredentials.test";
import { fakeUserCreator } from "./createUserWithScopeAndRole.test";
import { AuthenticationFailedError } from "../errors/AuthenticationFailed.error";

// This does only check the password, but that's not relevant
const fakeAuthenticator = async (credentials: any) => {
  if (credentials.hasOwnProperty("context")) {
    if (
      credentials.context.headers.password === "password1" &&
      credentials.context.headers.userid === "5bb261e56d4e3b12b5bb5cc7"
    ) {
      return await fakeUserCreator({ id: "5bb261e56d4e3b12b5bb5cc7" });
    } else {
      throw new AuthenticationFailedError();
    }
  } else {
    throw new AuthenticationFailedError();
  }
};

it("Should return user if correct credentials have been provided", async () =>
  expect(
    (await authenticateUserInUserScope(
      credentials => fakeAuthenticator(credentials),
      "5bb261e56d4e3b12b5bb5cc7",
      fakeParams
    )).id
  ).toEqual("5bb261e56d4e3b12b5bb5cc7"));

it("Should throw error if incorrect credentials have been provided", () =>
  expect(
    authenticateUserInUserScope(
      credentials => fakeAuthenticator(credentials),
      "5bb261e56d4e3b12b5bb5cc7",
      fakeParamsWithoutPassword
    )
  ).rejects.toEqual(new AuthenticationFailedError()));

it("Should throw error if no credentials have been provided", () =>
  expect(
    authenticateUserInUserScope(
      credentials => fakeAuthenticator(credentials),
      "5bb261e56d4e3b12b5bb5cc7",
      fakeParamsWithoutContext
    )
  ).rejects.toEqual(new AuthenticationFailedError()));
