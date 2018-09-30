class RoleIsMetaRoleError extends Error {
  constructor() {
    super("Role is immutable meta role, delete the parent role instead!");
  }
}

export { RoleIsMetaRoleError };
