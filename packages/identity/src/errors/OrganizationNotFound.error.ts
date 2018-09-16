class OrganizationNotFoundError extends Error {
  constructor() {
    super("Organization could not be found!");
  }
}

export { OrganizationNotFoundError };
