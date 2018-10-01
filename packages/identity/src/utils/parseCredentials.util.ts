import { NoPasswordProvidedError } from "../errors/NoPasswordProvided.error";
import { NoUserIdProvidedError } from "../errors/NoUserIdProvided.error";
import { NoCredentialsProvidedError } from "../errors/NoCredentialsProvided.error";

async function parseCredentials(params: any) {
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
}

export { parseCredentials };
