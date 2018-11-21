import { createScope } from "../utils";
import { ScopeController } from "../mocks";

it("Should create a scope", async () =>
  expect(
    await createScope("scope1", async name => new ScopeController(name))
  ).toMatchObject({
    name: "scope1"
  }));
