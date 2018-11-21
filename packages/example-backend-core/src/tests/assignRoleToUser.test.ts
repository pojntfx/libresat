import { RoleController, UserController } from "../mocks";
import { assignRoleToUser } from "../utils";

it("Should assign a role to a user", async () => {
  const role = new RoleController("role1");
  const user = new UserController("user1", "password1");
  const roleWithUser = await assignRoleToUser(
    "role1234",
    "user1234",
    id => role.get(id),
    id => user.get(id),
    (id, newRole) => role.update(id, newRole),
    (id, newUser) => user.update(id, newUser)
  );
  expect((await roleWithUser).users[0]).toMatchObject({
    name: "user1",
    password: "password1",
    id: "user1234"
  });
});
