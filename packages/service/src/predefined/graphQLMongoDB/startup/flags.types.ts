interface IGraphQLMongoDBFlagParserValidator {
  (arg?: string): boolean;
}

interface IGraphQLMongoDBFlagParserTransformer {
  (arg?: string): string | boolean;
}

interface IGraphQLMongoDBFlagParser {
  args: string[];
  getFlag(
    flag: string,
    validator?: IGraphQLMongoDBFlagParserValidator,
    transformer?: IGraphQLMongoDBFlagParserTransformer
  ): string | boolean;
  flagsHaveBeenProvided(): boolean;
}

export {
  IGraphQLMongoDBFlagParserValidator,
  IGraphQLMongoDBFlagParserTransformer,
  IGraphQLMongoDBFlagParser
};
