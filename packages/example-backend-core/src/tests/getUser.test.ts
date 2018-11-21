import { UserController } from "../mocks";
import { getUser } from "../utils";
import { UserDoesNotExistError } from "../errors";

it("Should get a user if correct ID has been specified", async () => {
  const user = new UserController("user1", "password1");
  const userFromScopeGetter = await getUser("user1234", id => user.get(id));
  expect(userFromScopeGetter).toEqual(user);
});

it("Should throw an error if user could not be found", async () => {
  const user = new UserController("user1", "password1");
  expect(getUser("thisiddoesnotexist", id => user.get(id))).rejects.toThrow(
    new UserDoesNotExistError()
  );
});
