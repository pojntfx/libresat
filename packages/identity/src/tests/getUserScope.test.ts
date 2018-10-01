import {
  fakeUserCreator,
  fakeScopeCreator
} from "./createUserWithScopeAndRole.test";
import { IUser } from "../types/user.type";
import { getUserScope } from "../utils/getUserScope.util";

const fakeUserGetter = async (id: IUser["id"]) => await fakeUserCreator({ id });

const fakeUserWithScopesGetter = async (id: IUser["id"]) => {
  const user = await fakeUserGetter(id);
  // Mock "assigned" user scope
  user.scopes.push(await fakeScopeCreator({ name: user.id }));
  return user;
};

it("Should return the user scope", async () => {
  expect(
    (await getUserScope(
      "5bb0dad75d697e3b5c8c9bd5",
      id => fakeUserGetter(id),
      id => fakeUserWithScopesGetter(id)
    )).name
  ).toEqual("5bb0dad75d697e3b5c8c9bd5"); // This should have the user's ID as it's name
});
