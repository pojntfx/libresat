import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { hash } from "bcryptjs";

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
    console.log(`Assigning role ${params.roleId} to user ${params.userId}`);
  }
}

export { UserController };
