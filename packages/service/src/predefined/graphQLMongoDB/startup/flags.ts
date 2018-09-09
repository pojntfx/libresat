import {
  IGraphQLMongoDBFlagParser,
  IGraphQLMongoDBFlagParserValidator,
  IGraphQLMongoDBFlagParserTransformer
} from "./flags.types";
import { ArgDoesNotPassValidationError } from "../error/argDoesNotPassValidationError";

class GraphQLMongoDBFlagParser implements IGraphQLMongoDBFlagParser {
  args: any;

  constructor(args: IGraphQLMongoDBFlagParser["args"]) {
    this.args = args.slice(2); // Don't need to have "node" & the script's name
  }

  getFlag(
    flag: string,
    validator: IGraphQLMongoDBFlagParserValidator,
    transformer: IGraphQLMongoDBFlagParserTransformer
  ) {
    if (this.args.includes(flag)) {
      const rawArg = this.args[this.args.indexOf(flag) + 1];
      const checkedArg = validator
        ? validator(rawArg)
          ? rawArg
          : new ArgDoesNotPassValidationError(rawArg, flag)
        : rawArg;
      const arg = transformer ? transformer(checkedArg) : checkedArg;
      return arg;
    } else {
      return false;
    }
  }

  flagsHaveBeenProvided = () => this.args.length >= 1;
}

export { GraphQLMongoDBFlagParser };
