class ArgDoesNotPassValidationError extends Error {
  constructor(arg: string, flag: string) {
    super(`Arg ${arg} from flag ${flag} does not pass validation!`);
  }
}

export { ArgDoesNotPassValidationError };
