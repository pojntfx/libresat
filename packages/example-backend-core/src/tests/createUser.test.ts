import { createUser } from "../utils";
import { UserController, ScopeController, RoleController } from "../mocks";
import { IUser, IScope, IRole } from "../@types";

it("Should create a user", async () => {
  let user: UserController;
  let scope: ScopeController;
  let role: RoleController;
  const userWithScopeAndRole = await createUser(
    "user1",
    "password1",
    async (name: IUser["name"], password: IUser["password"]) => {
      user = new UserController(name, password);
      return user;
    },
    async (name: IScope["name"]) => {
      scope = new ScopeController(name);
      return scope;
    },
    async (name: IRole["name"]) => {
      role = new RoleController(name);
      return role;
    },
    async (id: IUser["id"], newUser: IUser) => user.update(id, newUser),
    async (id: IScope["id"], newScope: IScope) => scope.update(id, newScope),
    async (id: IRole["id"], newRole: IRole) => role.update(id, newRole),
    async (id: IUser["id"]) => user
  );
  // Name and password should be the provided values, ID should be the auto-generated value
  expect(await userWithScopeAndRole).toMatchObject({
    id: "user1234",
    name: "user1",
    password: "password1"
  });
});

it("Should create a management scope for a user", async () => {
  let user: UserController;
  let scope: ScopeController;
  let role: RoleController;
  const userWithScopeAndRole = await createUser(
    "user1",
    "password1",
    async (name: IUser["name"], password: IUser["password"]) => {
      user = new UserController(name, password);
      return user;
    },
    async (name: IScope["name"]) => {
      scope = new ScopeController(name);
      return scope;
    },
    async (name: IRole["name"]) => {
      role = new RoleController(name);
      return role;
    },
    async (id: IUser["id"], newUser: IUser) => user.update(id, newUser),
    async (id: IScope["id"], newScope: IScope) => scope.update(id, newScope),
    async (id: IRole["id"], newRole: IRole) => role.update(id, newRole),
    async (id: IUser["id"]) => user
  );
  // Name should be the user ID, ID should be the auto-generated value
  expect((await userWithScopeAndRole).scopes[0]).toMatchObject({
    name: "user1234",
    id: "scope1234"
  });
});

it("Should create a management role for a user", async () => {
  let user: UserController;
  let scope: ScopeController;
  let role: RoleController;
  const userWithScopeAndRole = await createUser(
    "user1",
    "password1",
    async (name: IUser["name"], password: IUser["password"]) => {
      user = new UserController(name, password);
      return user;
    },
    async (name: IScope["name"]) => {
      scope = new ScopeController(name);
      return scope;
    },
    async (name: IRole["name"]) => {
      role = new RoleController(name);
      return role;
    },
    async (id: IUser["id"], newUser: IUser) => user.update(id, newUser),
    async (id: IScope["id"], newScope: IScope) => scope.update(id, newScope),
    async (id: IRole["id"], newRole: IRole) => role.update(id, newRole),
    async (id: IUser["id"]) => user
  );
  // Name should be "UPDATE:SELF" (constant discriminator string), ID should be the auto-generated value
  expect((await userWithScopeAndRole).roles[0]).toMatchObject({
    name: "UPDATE:SELF",
    id: "role1234"
  });
});
