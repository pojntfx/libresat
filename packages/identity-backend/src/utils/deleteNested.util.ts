import { GraphQLMongoDBController } from "@libresat/service";
import { IDeleteNested } from "../types/deleteNested.type";

/**
 * Delete all references to an document and the document itself
 * @param deletableController Controller of the document to be deleted
 * @param deletableId Id of the document to be deleted
 * @param superDelete Function that deletes the document by it's ID
 * @param othersWithDeleteable Other documents that contain references to the document to be deleted
 */
async function deleteNested(
  deletableController: GraphQLMongoDBController,
  deletableId: IDeleteNested["deletableId"],
  superDelete: IDeleteNested["superDelete"],
  othersWithDeleteable: IDeleteNested["othersWithDeleteable"]
): Promise<any> {
  // Get the document to delete
  const deletable = await deletableController.get(deletableId);
  // Remove references to the document to delete from
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
  // Delete the document
  await superDelete(deletableId);
  return deletable;
}

export { deleteNested };
