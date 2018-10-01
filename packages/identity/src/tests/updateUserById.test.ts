import { IUser } from "../types/user.type";
import { fakeUserCreator } from "./createUserWithScopeAndRole.test";
import { updateUserById } from "../utils/updateUserById.util";

interface IUserUpdaterParams {
  name: IUser["name"];
  password: IUser["password"];
}

const fakeUserUpdater = async (
  id: IUser["id"],
  properties: IUserUpdaterParams
) =>
  await fakeUserCreator({
    id,
    ...properties
  });

it("Should return updated user", async () =>
  expect(
    (await updateUserById(
      "5bb0dad75d697e3b5c8c9bd5",
      "user2",
      "password2",
      (id, properties) => fakeUserUpdater(id, properties as IUserUpdaterParams)
    )).name
  ).toEqual("user2"));
