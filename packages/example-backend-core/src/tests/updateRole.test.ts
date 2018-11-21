import { RoleController } from "../mocks";
import { updateRole } from "../utils";

it("Should update a role", async () => {
  const role = new RoleController("role1");
  const newRoleTitle = "role2";
  expect(
    (await updateRole(
      "role1234",
      { ...role, name: newRoleTitle },
      (id, newRole) => role.update(id, newRole)
    )).name
  ).toEqual("role2");
});
