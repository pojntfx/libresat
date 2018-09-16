import { OrganizationController } from "../controllers/organization.controller";
import { role } from "../resolvers/role.resolver";
import { AuthorizationFailedError } from "../errors/AuthorizationFailed.error";
import { OrganizationNotFoundError } from "../errors/OrganizationNotFound.error";
import { UserNotFoundError } from "../errors/UserNotFound.error";

async function authorize(
  userId: string,
  organization: OrganizationController,
  organizationId: string,
  validRolesNames: string[]
) {
  const organizationWithRoles = await organization.getWithRoles(organizationId);

  if (!organizationWithRoles) {
    throw new OrganizationNotFoundError();
  } else {
    const organizationRoles = organizationWithRoles.roles;

    let validRoles = [];

    for (let validRoleName of validRolesNames) {
      const validRole = (await role.filter({ name: validRoleName }))[0]; // [0] removes duplicates
      validRoles.push(validRole);
    }

    if (validRoles[0]) {
      let userRoles = [];

      for (let organizationRole of organizationRoles) {
        for (let organizationUserId of organizationRole.users) {
          if (organizationUserId.toString() === userId) {
            userRoles.push(organizationRole);
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
