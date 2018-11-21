import { RoleController, ScopeController } from "../mocks";
import { assignRoleToScope } from "../utils";

it("Should assign a role to a scope", async () => {
  const role = new RoleController("role1");
  const scope = new ScopeController("scope1");
  const roleWithScope = await assignRoleToScope(
    "role1234",
    "scope1234",
    id => role.get(id),
    id => scope.get(id),
    (id, newRole) => role.update(id, newRole),
    (id, newScope) => scope.update(id, newScope)
  );
  expect((await roleWithScope).scopes[0]).toMatchObject({
    name: "scope1",
    id: "scope1234"
  });
});
