import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { role } from "../resolvers/role.resolver";
import { compare, hash } from "bcryptjs";
import { AuthenticationFailedError } from "../errors/AuthenticationFailed.error";
import { AuthorizationFailedError } from "../errors/AuthorzationFailed.error";

class UserController extends Controller {
  getWithRoles = async (id: string) =>
    this.model.findById(id).populate("roles");

  getAllRoles = async (parent: any) =>
    this.get(parent.id).then(user =>
      user.roles.map(async (roleId: string) => await role.get(roleId))
    );

  async create(params: any) {
    const saltedpassword = await hash(params.password, 10);
    const newUser = await super.create({
      ...params,
      password: saltedpassword
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

  update = async (_: any, params: any) => {
    const userId = params.authorization.userid;
    const password = params.authorization.password;
    const isAuthenticated = await this.isAuthorized(userId, password, [
      "role1"
    ]);
    if (isAuthenticated) {
      return await this.updateWithHashedPassword(
        userId,
        params,
        params.password
      );
    } else {
      throw new AuthenticationFailedError();
    }
  };

  async isAuthorized(
    userId: string,
    password: string,
    authorizedRoles: string[]
  ) {
    const user = await this.getWithRoles(userId);
    if (await this.isAuthenticated(user, password)) {
      if (await this.hasRoles(user, authorizedRoles)) {
        return true;
      } else {
        throw new AuthorizationFailedError();
      }
    } else {
      throw new AuthenticationFailedError();
    }
  }

  isAuthenticated = async (user: any, password: string) =>
    await compare(password, user.password);

  async hasRoles(user: any, authorizedRoles: string[]) {
    const validRoles = [];
    for (let authorizedRole of authorizedRoles) {
      if (validRoles.length >= 1) {
        break;
      } else {
        for (let userRole of user.roles) {
          if (userRole.name === authorizedRole) {
            validRoles.push(userRole);
            break;
          }
        }
      }
    }
    return validRoles.length <= 0 ? false : true;
  }

  async updateWithHashedPassword(id: string, params: any, password: string) {
    const hashedPassword = await hash(password, 10);
    return super.update(id, {
      ...params,
      password: hashedPassword
    });
  }

  filter = async (params: any) => super.filter(params.filter || undefined);
}

export { UserController };
