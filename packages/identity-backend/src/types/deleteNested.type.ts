import { GraphQLMongoDBController } from "@libresat/service";

interface IOthersWithDeleteable {
  getter: any;
  controller: GraphQLMongoDBController;
  path: string;
}

interface IDeleteNested {
  deletableController: GraphQLMongoDBController;
  deletableId: string;
  superDelete: any;
  othersWithDeleteable: IOthersWithDeleteable[];
}

export { IOthersWithDeleteable, IDeleteNested };
