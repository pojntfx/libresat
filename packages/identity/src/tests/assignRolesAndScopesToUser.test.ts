import { assignRoleAndScopeToUser } from "../utils/assignRolesAndScopesToUser.util";
import { IScope } from "../types/scope.type";
import { IUser } from "../types/user.type";
import {
  fakeUserCreator,
  fakeScopeCreator,
  fakeRoleCreator
} from "./createUserWithScopeAndRole.test";
import { WRITE_SELF } from "../constants/roles.constants";
import { IRole } from "../types/role.type";

interface IFakeUserToScopeAssignerParams {
  scopeId: IScope["id"];
  userId: IUser["id"];
}

interface IFakeRoleToUserAssigner {
  roleId: IRole["id"];
  userId: IUser["id"];
}

interface IFakeRoleToScopeAssigner {
  roleId: IRole["id"];
  scopeId: IScope["id"];
}

const fakeUser = fakeUserCreator({ name: "user1", password: "password1" });

const fakeScope = fakeScopeCreator({ name: "5bb0dad75d697e3b5c8c9bd5" });

const fakeRole = fakeRoleCreator({ name: WRITE_SELF });

const fakeUserToScopeAssigner = async (
  params: IFakeUserToScopeAssignerParams
) => {
  (await fakeScope).users.push({ ...(await fakeUser), id: params.userId });
  (await fakeUser).scopes.push({ ...(await fakeScope), id: params.scopeId });
  return fakeScope;
};

const fakeRoleToUserAssigner = async (params: IFakeRoleToUserAssigner) => {
  (await fakeRole).users.push({ ...(await fakeUser), id: params.userId });
  (await fakeUser).roles.push({ ...(await fakeRole), id: params.roleId });
  return fakeRole;
};

const fakeRoleToScopeAssigner = async (params: IFakeRoleToScopeAssigner) => {
  (await fakeScope).roles.push({ ...(await fakeRole), id: params.roleId });
  (await fakeRole).scopes.push({ ...(await fakeScope), id: params.scopeId });
  return fakeRole;
};

it("Should assign scope to user", async () =>
  expect(
    (await assignRoleAndScopeToUser(
      "5bb0dad75d697e3b5c8c9bd5",
      "5bb0dad75d697e3b5c8c9bd6",
      "5bb0dad75d697e3b5c8c9bd7",
      userAndScope => fakeUserToScopeAssigner(userAndScope),
      roleAndUser => fakeRoleToUserAssigner(roleAndUser),
      roleAndScope => fakeRoleToScopeAssigner(roleAndScope)
    )).scopeOfUser.id
  ).toEqual((await fakeScope).id));

it("Should assign role to user", async () =>
  expect(
    (await assignRoleAndScopeToUser(
      "5bb0dad75d697e3b5c8c9bd5",
      "5bb0dad75d697e3b5c8c9bd6",
      "5bb0dad75d697e3b5c8c9bd7",
      userAndScope => fakeUserToScopeAssigner(userAndScope),
      roleAndUser => fakeRoleToUserAssigner(roleAndUser),
      roleAndScope => fakeRoleToScopeAssigner(roleAndScope)
    )).roleOfUser.users[0].id
  ).toEqual((await fakeUser).id));

it("Should assign role to user", async () =>
  expect(
    (await assignRoleAndScopeToUser(
      "5bb0dad75d697e3b5c8c9bd5",
      "5bb0dad75d697e3b5c8c9bd6",
      "5bb0dad75d697e3b5c8c9bd7",
      userAndScope => fakeUserToScopeAssigner(userAndScope),
      roleAndUser => fakeRoleToUserAssigner(roleAndUser),
      roleAndScope => fakeRoleToScopeAssigner(roleAndScope)
    )).roleOfUser.scopes[0].id
  ).toEqual((await fakeScope).id));
