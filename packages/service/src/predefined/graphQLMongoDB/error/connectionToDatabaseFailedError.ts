import { IConnectionToDatabaseFailedErrorParams } from "./connectionToDatabaseFailedError.types";

class ConnectionToDatabaseFailedError extends Error {
  constructor(
    url: IConnectionToDatabaseFailedErrorParams["url"],
    details: IConnectionToDatabaseFailedErrorParams["details"]
  ) {
    super(
      `ConnectionToDatabaseFailedError: Could not connect to database at ${url}.
Original error message:
${details}`
    );
  }
}

export { ConnectionToDatabaseFailedError };
