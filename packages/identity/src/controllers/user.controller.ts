import { GraphQLMongoDBController as Controller } from "@libresat/service";

class UserController extends Controller {
  async assignRole(params: any) {
    console.log(`Assigning role ${params.roleId} to user ${params.userId}`);
  }
}

export { UserController };
