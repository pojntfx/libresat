import { IUser } from "../types/user.type";
import { IRole } from "../types/role.type";
import { IScope } from "../types/scope.type";
import { createUserWithScopeAndRole } from "../utils/createUserWithScopeAndRole.util";

const fakeUserCreator = async (params: any): Promise<IUser> => ({
  id: "5bb0dad75d697e3b5c8c9bd5",
  ...params,
  roles: [],
  scopes: []
});

const fakeScopeCreator = async (params: any): Promise<IScope> => ({
  id: "5bb0dad75d697e3b5c8c9bd7",
  ...params,
  users: [],
  roles: []
});

const fakeRoleCreator = async (params: any): Promise<IRole> => ({
  id: "5bb0dad75d697e3b5c8c9bd6",
  ...params,
  users: [],
  scopes: []
});

it("Should create user with scopes and roles", async () => {
  expect(
    await createUserWithScopeAndRole(
      "user1",
      "password1",
      properties => fakeUserCreator(properties),
      properties => fakeScopeCreator(properties),
      properties => fakeRoleCreator(properties)
    )
  ).toEqual({
    user: {
      id: "5bb0dad75d697e3b5c8c9bd5",
      name: "user1",
      password: "password1",
      roles: [],
      scopes: []
    },
    userId: "5bb0dad75d697e3b5c8c9bd5",
    userScopeId: "5bb0dad75d697e3b5c8c9bd7",
    writeSelfRoleId: "5bb0dad75d697e3b5c8c9bd6"
  });
});

export { fakeUserCreator, fakeScopeCreator, fakeRoleCreator };
