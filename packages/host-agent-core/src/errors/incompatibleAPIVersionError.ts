class IncompatibleAPIVersionError extends Error {
  constructor(foundApiVersion, expectedApiVersion) {
    super(
      `API version ${foundApiVersion} is not compatible with this client, which requires API Version ${expectedApiVersion}`
    );
  }
}

export { IncompatibleAPIVersionError };
