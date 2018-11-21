import { ScopeController } from "../mocks";
import { updateScope } from "../utils";

it("Should update a scope", async () => {
  const scope = new ScopeController("scope1");
  const newScopeTitle = "scope2";
  expect(
    (await updateScope(
      "scope1234",
      { ...scope, name: newScopeTitle },
      (id, newScope) => scope.update(id, newScope)
    )).name
  ).toEqual("scope2");
});
