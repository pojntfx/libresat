class MultipleFilterParamsError extends Error {
  constructor() {
    super(
      "Cannot filter by multiple parameters, only an (optionally nested) single one"
    );
  }
}

export { MultipleFilterParamsError };
