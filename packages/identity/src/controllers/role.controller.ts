import { GraphQLMongoDBController as Controller } from "@libresat/service";

class RoleController extends Controller {
  getAllUsers = async (parent: any) =>
    (await this.model.findById(parent.id).populate("users")).users;

  getAllScopes = async (parent: any) =>
    (await this.model.findById(parent.id).populate("scopes")).scopes;
}

export { RoleController };
