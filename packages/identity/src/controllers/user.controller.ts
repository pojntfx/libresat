import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { hash } from "bcryptjs";
import { assign } from "../utils/assign";
import { role } from "../resolvers/role.resolver";

class UserController extends Controller {
  async create(params: any) {
    const { password } = params;
    const encryptedPassword = await hash(password, 10);
    return await super.create({
      ...params,
      password: encryptedPassword
    });
  }

  async assignRole(params: any) {
    const { userId, roleId } = params;

    const organizationToAssignRoleTo = await assign(
      this,
      userId,
      "roles",
      role,
      roleId,
      "users"
    );

    return organizationToAssignRoleTo;
  }
}

export { UserController };
