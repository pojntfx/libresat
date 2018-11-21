import { UserController } from "../mocks";
import { getUser, authenticateUserWithIdAndPassword } from "../utils";
import { UserDoesNotExistError, WrongPasswordError } from "../errors";

it("Should return true if correct user id and password have been provided", async () => {
  const user = new UserController("user1", "password1");
  expect(
    await authenticateUserWithIdAndPassword("user1234", "password1", id =>
      user.get(id)
    )
  ).toBe(true);
});

it("Should throw an error if id of non existing user id has been provided", async () => {
  const user = new UserController("user1", "password1");
  expect(
    authenticateUserWithIdAndPassword("idofnonexistentuser", "password1", id =>
      user.get(id)
    )
  ).rejects.toThrow(new UserDoesNotExistError());
});

it("Should throw an error if wrong password has been provided", async () => {
  const user = new UserController("user1", "password1");
  expect(
    authenticateUserWithIdAndPassword("user1234", "wrongpassword", id =>
      user.get(id)
    )
  ).rejects.toThrow(new WrongPasswordError());
});
