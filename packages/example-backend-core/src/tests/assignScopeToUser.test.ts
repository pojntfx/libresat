import { ScopeController, UserController } from "../mocks";
import {
  assignScopeToUser,
  getScope,
  getUser,
  updateScope,
  updateUser
} from "../utils";

it("Should assign a scope to a user", async () => {
  const scope = new ScopeController("scope1");
  const user = new UserController("user1", "password1");
  const scopeWithUser = await assignScopeToUser(
    "scope1234",
    "user1234",
    id => getScope(id, id => scope.get(id)),
    id => getUser(id, id => user.get(id)),
    (id, newScope) =>
      updateScope(id, newScope, (id, newScope) => scope.update(id, newScope)),
    (id, newUser) =>
      updateUser(id, newUser, (id, newUser) => user.update(id, newUser))
  );
  expect((await scopeWithUser).users[0]).toMatchObject({
    name: "user1",
    password: "password1",
    id: "user1234"
  });
});
