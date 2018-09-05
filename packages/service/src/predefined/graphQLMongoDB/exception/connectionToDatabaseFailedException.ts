import { IConnectionToDatabasedFailedExceptionParams } from "./connectionToDatabaseFailedException.types";

class ConnectionToDatabaseFailedException extends Error {
  constructor(
    url: IConnectionToDatabasedFailedExceptionParams["url"],
    details: IConnectionToDatabasedFailedExceptionParams["details"]
  ) {
    super(
      `ConnectionToDatabaseFailedException: Could not connect to database at ${url}.
Original error message:
${details}`
    );
  }
}

export { ConnectionToDatabaseFailedException };
