async function parseCredentials(params: any) {
  if (params.context.headers) {
    if (params.context.headers.userid) {
      if (params.context.headers.password) {
        return {
          userId: params.context.headers.userid,
          password: params.context.headers.password
        };
      } else {
        throw new Error("No password provided!");
      }
    } else {
      throw new Error("No user ID provided!");
    }
  } else {
    throw new Error("No credentials provided!");
  }
}

export { parseCredentials };
