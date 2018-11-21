import { UserController } from "../mocks";
import { updateUser } from "../utils";

it("Should update a user", async () => {
  const user = new UserController("user1", "password1");
  const newUserTitle = "user2";
  expect(
    (await updateUser(
      "user1234",
      { ...user, name: newUserTitle },
      (id, newUser) => user.update(id, newUser)
    )).name
  ).toEqual("user2");
});
