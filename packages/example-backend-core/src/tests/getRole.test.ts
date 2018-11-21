import { RoleController } from "../mocks";
import { getRole } from "../utils";
import { RoleDoesNotExistError } from "../errors";

it("Should get a role if correct ID has been specified", async () => {
  const role = new RoleController("role1");
  const roleFromRoleGetter = await getRole("role1234", id => role.get(id));
  expect(roleFromRoleGetter).toEqual(role);
});

it("Should throw an error if role could not be found", async () => {
  const role = new RoleController("role1");
  expect(getRole("thisiddoesnotexist", id => role.get(id))).rejects.toThrow(
    new RoleDoesNotExistError()
  );
});
