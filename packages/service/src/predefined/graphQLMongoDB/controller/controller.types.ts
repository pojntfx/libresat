import { GraphQLMongoDBControllable } from "./controller";

type ControllerID = string;

interface IGraphQLMongoDBControllerParams {}

interface IGraphQLMongoDBController {
  model: GraphQLMongoDBControllable;

  create(
    params: IGraphQLMongoDBControllerParams
  ): Promise<GraphQLMongoDBControllable>;

  get(id: ControllerID): Promise<GraphQLMongoDBControllable>;

  getAll(): Promise<GraphQLMongoDBControllable[]>;

  filter(
    params: IGraphQLMongoDBControllerParams
  ): Promise<GraphQLMongoDBControllable[]>;

  update(
    id: ControllerID,
    params: IGraphQLMongoDBControllerParams
  ): Promise<GraphQLMongoDBControllable>;

  delete(id: ControllerID): Promise<GraphQLMongoDBControllable>;

  deleteAll(): Promise<GraphQLMongoDBControllable[]>;
}

export {
  IGraphQLMongoDBController,
  IGraphQLMongoDBControllerParams,
  ControllerID
};
