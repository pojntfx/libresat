import { GraphQLMongoDBController as Controller } from "@libresat/service";

class OrganizationController extends Controller {
  async get(id: string) {
    return this.model.findById(id).populate({
      path: "roles",
      populate: {
        path: "users"
      }
    });
  }
}

export { OrganizationController };
