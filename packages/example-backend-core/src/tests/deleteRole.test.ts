import { createRole } from "../utils";
import { RoleController } from "../mocks";
import { deleteRole } from "../utils/deleteRole.util";

it("Should delete the role", async () => {
  const roleDB = [
    await createRole("role1", async name => new RoleController(name))
  ];
  await deleteRole("role1234", async id => {
    delete roleDB[0];
    return roleDB[0];
  });
  expect(roleDB[0]).toBeUndefined();
});
