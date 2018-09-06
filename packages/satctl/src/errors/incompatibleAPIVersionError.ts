class IncompatibleAPIVersionError extends Error {
  constructor(apiVersion) {
    super(
      `API version ${apiVersion} is not compatible with this client, which requires API Version https://standards.libresat.space/satctl/v0.0.1-0s`
    );
  }
}

export { IncompatibleAPIVersionError };
