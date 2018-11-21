import { createScope, createRole } from "../utils";
import { deleteUser } from "../utils/deleteUser.util";
import { IUser } from "../@types";

it("Should delete the user", async () => {
  const user: IUser = {
    id: "user1234",
    name: "user1",
    password: "password1",
    roles: [], // We don't check that in the delete function
    scopes: [
      await createScope("user1234", async name => ({
        id: "scope1234",
        name: "user1234",
        roles: [
          await createRole("user1234", async name => ({
            id: "role1234",
            name: "UPDATE:SELF",
            scopes: [],
            users: []
          }))
        ],
        users: []
      }))
    ]
  };
  // This needs to be refactored. See ../../TODO.md for more details.
  expect(
    await deleteUser(
      "user1234",
      async id => user,
      async id => user,
      async () => user.scopes[0].roles[0],
      async () => user.scopes[0]
    )
  ).toBe(user);
});
