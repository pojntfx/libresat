import {
  fakeUserCreator,
  fakeRoleCreator
} from "./createUserWithScopeAndRole.test";
import { IUser } from "../types/user.type";
import { getUserRole } from "../utils/getUserRole.util";
import { WRITE_SELF } from "../constants/roles.constants";

const fakeUserGetter = async (id: IUser["id"]) => await fakeUserCreator({ id });

const fakeUserWithRolesGetter = async (id: IUser["id"]) => {
  const user = await fakeUserGetter(id);
  // Mock "assigned" user role
  user.roles.push(await fakeRoleCreator({ name: WRITE_SELF }));
  return user;
};

it("Should return the user role", async () => {
  expect(
    (await getUserRole("5bb0dad75d697e3b5c8c9bd5", id =>
      fakeUserWithRolesGetter(id)
    )).name
  ).toEqual(WRITE_SELF);
});
