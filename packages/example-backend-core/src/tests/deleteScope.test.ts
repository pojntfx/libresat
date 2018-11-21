import { createScope } from "../utils";
import { ScopeController } from "../mocks";
import { deleteScope } from "../utils/deleteScope.util";

it("Should delete the scope", async () => {
  const scopeDB = [
    await createScope("scope1", async name => new ScopeController(name))
  ];
  await deleteScope("scope1234", async id => {
    delete scopeDB[0];
    return scopeDB[0];
  });
  expect(scopeDB[0]).toBeUndefined();
});
