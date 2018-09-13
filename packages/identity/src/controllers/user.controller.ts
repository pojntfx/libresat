import { GraphQLMongoDBController as Controller } from "@libresat/service";
import { role } from "../resolvers/role.resolver";
import { compare, hash } from "bcryptjs";
import { AuthenticationFailedError } from "../errors/AuthenticationFailed.error";

class UserController extends Controller {
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
    const isAuthenticated = await this.authenticate(userId, password);
    if (isAuthenticated) {
      const user = await this.get(userId);
      const roleIds = await user.roles;
      let roles = [];
      for (let roleId of roleIds) {
        roles.push(await role.get(roleId));
      }
      const doesHaveRole = await this.doesUserHaveRole(roles, ["role1"]);
      if (doesHaveRole) {
        return await this.updateWithHashedPassword(
          userId,
          params,
          params.password
        );
      } else {
        throw new AuthenticationFailedError();
      }
    } else {
      throw new AuthenticationFailedError();
    }
  };

  authenticate = async (id: string, password: string) =>
    await this.get(id).then(
      async (user: any) => await compare(password, user.password)
    );

  async doesUserHaveRole(userRoles: any, wantedRoles: string[]) {
    const validRoles = [];
    // This is much faster then array.filter(), so we use it even though it's imperative
    for (let wantedRole of wantedRoles) {
      if (validRoles.length >= 1) {
        break;
      } else {
        for (let userRole of userRoles) {
          if (userRole.name === wantedRole) {
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
