import { createRole } from "../utils";
import { RoleController } from "../mocks";

it("Should create a role", async () =>
  expect(
    await createRole("role1", async name => new RoleController(name))
  ).toMatchObject({
    name: "role1"
  }));
