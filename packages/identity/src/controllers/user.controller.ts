import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { role } from "../resolvers/role.resolver";
import { compare, hash } from "bcryptjs";
import { AuthenticationFailedError } from "../errors/AuthenticationFailed.error";
import { AuthorizationFailedError } from "../errors/AuthorizationFailed.error";
import { writeSelf } from "../constants/roles.constants";

class UserController extends Controller {
  async create(params: any) {
    const saltedPassword = await hash(params.password, 10);
    const newUser = await super.create({
      ...params,
      password: saltedPassword
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

  async update(_: any, params: any) {
    const { userId, password } = await this.parseCredentials(params);
    return (await this.isAuthorized(userId, password, [writeSelf]))
      ? await this.updateWithHashedPassword(userId, params, params.password)
      : new AuthorizationFailedError();
  }

  async delete(params: any) {
    const { userId, password } = await this.parseCredentials(params);
    return (await this.isAuthorized(userId, password, [writeSelf]))
      ? super.delete(params.userId)
      : new AuthorizationFailedError();
  }

  getWithRoles = async (id: string) =>
    this.model.findById(id).populate("roles");

  getAllRoles = async (parent: any) =>
    this.get(parent.id).then(user =>
      user.roles.map(async (roleId: string) => await role.get(roleId))
    );

  async isAuthorized(
    userId: string,
    password: string,
    authorizedRoles: string[]
  ) {
    const user = await this.getWithRoles(userId);
    return (await this.isAuthenticated(user, password))
      ? (await this.hasRoles(user, authorizedRoles))
        ? true
        : new AuthorizationFailedError()
      : new AuthenticationFailedError();
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

  parseCredentials = async (params: any) => ({
    userId: params.context.headers.userid,
    password: params.context.headers.password
  });

  filter = async (params: any) => super.filter(params.filter || undefined);
}

export { UserController };
