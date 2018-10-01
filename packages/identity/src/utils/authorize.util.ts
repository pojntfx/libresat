import { ScopeController } from "../controllers/scope.controller";
import { role } from "../resolvers/role.resolver";
import { AuthorizationFailedError } from "../errors/AuthorizationFailed.error";
import { ScopeNotFoundError } from "../errors/ScopeNotFound.error";
import { UserNotFoundError } from "../errors/UserNotFound.error";

async function authorize(
  userId: string,
  scope: ScopeController,
  scopeId: string,
  validRolesNames: string[]
) {
  const scopeWithRoles = await scope.getWithRoles(scopeId);

  if (!scopeWithRoles) {
    throw new ScopeNotFoundError();
  } else {
    const scopeRoles = scopeWithRoles.roles;

    let validRoles = [];

    for (let validRoleName of validRolesNames) {
      const validRole = (await role.filter({ name: validRoleName }))[0]; // [0] removes duplicates
      validRoles.push(validRole);
    }

    if (validRoles[0]) {
      let userRoles = [];

      for (let scopeRole of scopeRoles) {
        for (let scopeUserId of scopeRole.users) {
          if (scopeUserId.toString() === userId) {
            userRoles.push(scopeRole);
          }
        }
      }

      if (userRoles[0]) {
        let userHasAllValidRoles = false;

        if (userRoles.length > 0) {
          for (let validRole of validRoles) {
            for (let userRole of userRoles) {
              if (validRole) {
                if (userRole.id === validRole.id) {
                  userHasAllValidRoles = true;
                } else {
                  userHasAllValidRoles = false;
                  break;
                }
              } else {
                throw new AuthorizationFailedError();
              }
            }
          }
        }

        return userHasAllValidRoles ? true : new AuthorizationFailedError();
      } else {
        throw new UserNotFoundError();
      }
    } else {
      throw new AuthorizationFailedError();
    }
  }
}

export { authorize };
