import { NoPasswordProvidedError } from "../errors/NoPasswordProvided.error";
import { NoUserIdProvidedError } from "../errors/NoUserIdProvided.error";
import { NoCredentialsProvidedError } from "../errors/NoCredentialsProvided.error";
import { IGraphQLMongoDBControllerParamsWithAuthorizationHeader } from "../types/user.type";

/**
 * Get the userId and password of a user by the supplied headers
 * @param params Params containing the user's credentials
 */
async function parseCredentials(
  params: IGraphQLMongoDBControllerParamsWithAuthorizationHeader
) {
  if (params.hasOwnProperty("context")) {
    if (params.context.headers) {
      if (params.context.headers.userid) {
        if (params.context.headers.password) {
          return {
            userId: params.context.headers.userid,
            password: params.context.headers.password
          };
        } else {
          throw new NoPasswordProvidedError();
        }
      } else {
        throw new NoUserIdProvidedError();
      }
    } else {
      throw new NoCredentialsProvidedError();
    }
  } else {
    throw new NoCredentialsProvidedError();
  }
}

export { parseCredentials };
