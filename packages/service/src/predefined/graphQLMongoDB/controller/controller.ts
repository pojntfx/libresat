import * as mongoose from "mongoose";
import {
  IGraphQLMongoDBControllerParams,
  ControllerID,
  IGraphQLMongoDBController
} from "./controller.types";
import { MultipleFilterParamsError } from "../error/multipleFilterParamsError";

class GraphQLMongoDBControllable extends mongoose.Model {}

class GraphQLMongoDBController implements IGraphQLMongoDBController {
  constructor(public model: GraphQLMongoDBControllable) {}

  async create(params: IGraphQLMongoDBControllerParams) {
    return await this.model.create(params);
  }

  async get(id: ControllerID) {
    return await this.model.findById(id);
  }

  async getAll() {
    return await this.model.find();
  }

  async filter(params: any) {
    let isRootParam = false;
    for (let param in params) {
      if (typeof param === "string" || typeof param === "number") {
        isRootParam = true;
      }
    }
    let nestedPath: string[] = [];
    const getEdgeNodePath = (params: any) => {
      for (let param in params) {
        if (typeof params[param] === "object") {
          if (Object.keys(params[param]).length < 2) {
            nestedPath.push(param);
            getEdgeNodePath(params[param]);
          } else {
            throw new MultipleFilterParamsError();
          }
        } else if (nestedPath.length > 0) {
          nestedPath.push(param);
        }
      }
    }; // -> ["key1", "key2"]
    // Code below is from https://gist.github.com/jasonrhodes/2321581
    const getProperty = (propertyName: string, object: any) => {
      let parts = propertyName.split("."),
        length = parts.length,
        i,
        property: any = object || this;

      for (i = 0; i < length; i++) {
        property = property[parts[i]];
      }

      return property;
    };
    if (!isRootParam) {
      getEdgeNodePath(params);
      const edgeNodePath = nestedPath.join("."); // key1.key2.key3
      const edgeNodeValue = getProperty(nestedPath.join("."), params); // value at key1.key2.key3
      return await this.model.find({ [edgeNodePath]: edgeNodeValue }).exec(); // All documents that match key-value
    } else {
      const key = Object.keys(params)[0];
      const value = params[Object.keys(params)[0]];
      return await this.model.find({
        [key]: value
      });
    }
  }

  async update(id: ControllerID, params: IGraphQLMongoDBControllerParams) {
    await this.model.findByIdAndUpdate(id, params, { upsert: true });
    return await this.get(id); // So that we get the new instead of the old one (usefull for subscriptions)
  }

  async delete(id: ControllerID) {
    const documentToDelete = await this.get(id);
    await this.model
      .findById(id)
      .remove()
      .exec();
    return await documentToDelete;
  }

  async deleteAll() {
    const documentsToDelete = await this.getAll();
    await this.model
      .find()
      .remove()
      .exec();
    return await documentsToDelete;
  }
}

export { GraphQLMongoDBControllable, GraphQLMongoDBController };
