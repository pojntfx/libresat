import { GraphQLMongoDBController } from "@libresat/service";

/**
 * Assign a model to another model
 * @param firstController First controller
 * @param firstId Id of the first model
 * @param firstPath Path in the first model to add the second model to
 * @param secondController Second controller
 * @param secondId Id of the second controller
 * @param secondPath Path in the second model to add the first model to
 */
async function assign(
  firstController: GraphQLMongoDBController,
  firstId: string,
  firstPath: string,
  secondController: GraphQLMongoDBController,
  secondId: string,
  secondPath: string
) {
  const firstToAssignTo = await firstController.get(firstId);
  const secondToAssignTo = await secondController.get(secondId);

  await firstToAssignTo[firstPath].push(secondToAssignTo);
  await secondToAssignTo[secondPath].push(firstToAssignTo);

  await firstToAssignTo.save();
  await secondToAssignTo.save();

  return firstToAssignTo;
}

export { assign };
