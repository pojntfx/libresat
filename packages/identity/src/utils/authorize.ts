import { OrganizationController } from "../controllers/organization.controller";
import { role } from "../resolvers/role.resolver";
import { AuthorizationFailedError } from "../errors/AuthorizationFailed.error";

async function authorize(
  userId: string,
  organization: OrganizationController,
  organizationId: string,
  validRolesNames: string[]
) {
  const organizationRoles = (await organization.get(organizationId)).roles;

  let validRoles = [];

  for (let validRoleName of validRolesNames) {
    const validRole = await role.filter({ filter: { name: validRoleName } });
    validRoles.push(validRole);
  }

  let userRoles = []; // All roles of the organization which the user has

  for (let organizationRole of organizationRoles) {
    for (let organizationUser of organizationRole.users) {
      if (organizationUser.id === userId) {
        userRoles.push(organizationRole);
      }
    }
  }

  let userHasAllValidRoles = false;

  // Check if user has all roles necessary
  for (let validRole of validRoles) {
    for (let userRole of userRoles) {
      if (userRole.id === validRole.id) {
        userHasAllValidRoles = true;
      } else {
        userHasAllValidRoles = false;
        break;
      }
    }
  }

  return userHasAllValidRoles ? true : new AuthorizationFailedError();
}

export { authorize };
