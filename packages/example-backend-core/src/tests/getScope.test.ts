import { ScopeController } from "../mocks";
import { getScope } from "../utils";
import { ScopeDoesNotExistError } from "../errors";

it("Should get a scope if correct ID has been specified", async () => {
  const scope = new ScopeController("scope1");
  const scopeFromScopeGetter = await getScope("scope1234", id => scope.get(id));
  expect(scopeFromScopeGetter).toEqual(scope);
});

it("Should throw an error if scope could not be found", async () => {
  const scope = new ScopeController("scope1");
  expect(getScope("thisiddoesnotexist", id => scope.get(id))).rejects.toThrow(
    new ScopeDoesNotExistError()
  );
});
