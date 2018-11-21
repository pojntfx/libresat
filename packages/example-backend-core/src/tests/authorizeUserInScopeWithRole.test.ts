import { UserController, RoleController, ScopeController } from "../mocks";
import {
  assignRoleToScope,
  assignRoleToUser,
  assignScopeToUser,
  authorizeUserInScopeWithRole,
  getUser,
  getScope,
  updateScope,
  updateUser,
  updateRole,
  getRole
} from "../utils";
import {
  UserDoesNotHaveScopeError,
  ScopeDoesNotExistError,
  RoleDoesNotExistError
} from "../errors";

it("Should return true if user is authorized", async () => {
  const user = new UserController("user1", "password1");
  const role = new RoleController("role1");
  const scope = new ScopeController("scope1");
  await assignRoleToScope(
    "role1234",
    "scope1234",
    id => getRole(id, id => role.get(id)),
    id => getScope(id, id => scope.get(id)),
    (id, newRole) =>
      updateRole(id, newRole, (id, newRole) => role.update(id, newRole)),
    (id, newScope) =>
      updateScope(id, newScope, (id, newScope) => scope.update(id, newScope))
  );
  await assignRoleToUser(
    "role1234",
    "user1234",
    id => role.get(id),
    id => user.get(id),
    (id, newRole) =>
      updateRole(id, newRole, (id, newRole) => role.update(id, newRole)),
    (id, newUser) =>
      updateUser(id, newUser, (id, newUser) => user.update(id, newUser))
  );
  await assignScopeToUser(
    "scope1234",
    "user1234",
    id => getScope(id, id => scope.get(id)),
    id => getUser(id, id => user.get(id)),
    (id, newScope) =>
      updateScope(id, newScope, (id, newScope) => scope.update(id, newScope)),
    (id, newUser) =>
      updateUser(id, newUser, (id, newUser) => user.update(id, newUser))
  );
  expect(
    await authorizeUserInScopeWithRole(
      "user1234",
      "scope1234",
      "role1",
      id => getUser(id, id => user.get(id)),
      id => getScope(id, id => scope.get(id))
    )
  ).toBe(true);
});

it("Should throw error if user does not have scope", async () => {
  const user = new UserController("user1", "password1");
  const role = new RoleController("role1");
  const scope = new ScopeController("scope1");
  await assignRoleToScope(
    "role1234",
    "scope1234",
    id => getRole(id, id => role.get(id)),
    id => getScope(id, id => scope.get(id)),
    (id, newRole) =>
      updateRole(id, newRole, (id, newRole) => role.update(id, newRole)),
    (id, newScope) =>
      updateScope(id, newScope, (id, newScope) => scope.update(id, newScope))
  );
  await assignRoleToUser(
    "role1234",
    "user1234",
    id => role.get(id),
    id => user.get(id),
    (id, newRole) =>
      updateRole(id, newRole, (id, newRole) => role.update(id, newRole)),
    (id, newUser) =>
      updateUser(id, newUser, (id, newUser) => user.update(id, newUser))
  );
  await assignScopeToUser(
    "scope1234",
    "user1234",
    id => getScope(id, id => scope.get(id)),
    id => getUser(id, id => user.get(id)),
    (id, newScope) =>
      updateScope(id, newScope, (id, newScope) => scope.update(id, newScope)),
    (id, newUser) =>
      updateUser(id, newUser, (id, newUser) => user.update(id, newUser))
  );
  expect(
    authorizeUserInScopeWithRole(
      "user1234",
      "thisscopedoesnotexistontheuser",
      "role1",
      id => getUser(id, id => user.get(id)),
      id => getScope(id, id => scope.get(id))
    )
  ).rejects.toThrow(new ScopeDoesNotExistError());
});

it("Should throw error if user does not have role", async () => {
  const user = new UserController("user1", "password1");
  const role = new RoleController("role1");
  const scope = new ScopeController("scope1");
  await assignRoleToScope(
    "role1234",
    "scope1234",
    id => getRole(id, id => role.get(id)),
    id => getScope(id, id => scope.get(id)),
    (id, newRole) =>
      updateRole(id, newRole, (id, newRole) => role.update(id, newRole)),
    (id, newScope) =>
      updateScope(id, newScope, (id, newScope) => scope.update(id, newScope))
  );
  await assignRoleToUser(
    "role1234",
    "user1234",
    id => role.get(id),
    id => user.get(id),
    (id, newRole) =>
      updateRole(id, newRole, (id, newRole) => role.update(id, newRole)),
    (id, newUser) =>
      updateUser(id, newUser, (id, newUser) => user.update(id, newUser))
  );
  await assignScopeToUser(
    "scope1234",
    "user1234",
    id => getScope(id, id => scope.get(id)),
    id => getUser(id, id => user.get(id)),
    (id, newScope) =>
      updateScope(id, newScope, (id, newScope) => scope.update(id, newScope)),
    (id, newUser) =>
      updateUser(id, newUser, (id, newUser) => user.update(id, newUser))
  );
  expect(
    authorizeUserInScopeWithRole(
      "user1234",
      "scope1234",
      "thisscopedoesnotexist",
      id => getUser(id, id => user.get(id)),
      id => getScope(id, id => scope.get(id))
    )
  ).rejects.toThrow(new RoleDoesNotExistError());
});
