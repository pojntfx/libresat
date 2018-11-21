class WrongPasswordError extends Error {
  name = "WrongPasswordError";

  constructor() {
    super("Wrong password!");
  }
}

export { WrongPasswordError };
