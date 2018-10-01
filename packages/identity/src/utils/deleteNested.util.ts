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

/**
 * Delete all references to an object and the object itself
 * @param deletableController Controller of the object to be deleted
 * @param deletableId Id of the object to be deleted
 * @param superDelete Function that deletes the object by it's ID
 * @param othersWithDeleteable Other objects that contain references to the object to be deleted
 */
async function deleteNested(
  deletableController: GraphQLMongoDBController,
  deletableId: IDeleteNested["deletableId"],
  superDelete: IDeleteNested["superDelete"],
  othersWithDeleteable: IDeleteNested["othersWithDeleteable"]
): Promise<any> {
  // Get the object to delete
  const deletable = await deletableController.get(deletableId);
  // Remove references to the object to delete from
  for (let otherWithDeleteable of othersWithDeleteable) {
    const { getter, controller, path } = otherWithDeleteable;
    const otherIds = await getter(deletableId);
    for (let otherId of otherIds) {
      const other = await controller.get(otherId);
      const pathAtOtherWithoutDeletables = other[path].filter(
        (potentialDeletableId: string) =>
          potentialDeletableId.toString() !== deletableId
      );
      if (pathAtOtherWithoutDeletables.length < other[path]) {
        await other.save();
      }
    }
  }
  // Delete the object
  await superDelete(deletableId);
  return deletable;
}

export { deleteNested };
