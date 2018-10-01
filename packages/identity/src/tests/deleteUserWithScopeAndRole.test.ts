import { IScope } from "../types/scope.type";
import {
  fakeScopeCreator,
  fakeRoleCreator,
  fakeUserCreator
} from "./createUserWithScopeAndRole.test";
import { IRole } from "../types/role.type";
import { IUser } from "../types/user.type";
import { deleteUserWithScopeAndRole } from "../utils/deleteUserWithScopeAndRole.util";

const fakeScopeDeleter = async (id: IScope["id"]): Promise<IScope> =>
  await fakeScopeCreator({ id });

const fakeRoleDeleter = async (id: IRole["id"]): Promise<IRole> =>
  await fakeRoleCreator({ id });

const fakeUserDeleter = async (id: IUser["id"]): Promise<IUser> =>
  await fakeUserCreator({ id });

it("Should return the deleted user", async () => {
  expect(
    (await deleteUserWithScopeAndRole(
      "5bb0dad75d697e3b5c8c9bd5",
      "5bb0dad75d697e3b5c8c9bd7",
      "5bb0dad75d697e3b5c8c9bd6",
      id => fakeRoleDeleter(id),
      id => fakeScopeDeleter(id),
      id => fakeUserDeleter(id)
    )).id
  ).toEqual("5bb0dad75d697e3b5c8c9bd5");
});
