import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { role } from "../resolvers/role.resolver";

class UserController extends Controller {
  async create(params: any) {
    // Create user
    const newUser = await super.create({
      name: params.name
    });
    // Get role to which this user belongs to
    const ownerRole = await role.get(params.roleId);
    // Assign user to role
    await newUser.roles.push(ownerRole);
    // Save the user
    await newUser.save();
    // Assign role to user
    ownerRole.users.push(newUser);
    // Save the role
    await ownerRole.save();
    return newUser;
  }

  async get(id: string) {
    return this.model.findById(id).populate({
      path: "roles",
      populate: {
        path: "organization"
      }
    });
  }
}

export { UserController };
