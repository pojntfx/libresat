import { mongoose as database } from "@libresat/service";

class Controllable extends database.Model {}

type ControllerID = string;

interface IControllerParams {}

interface IController {
  model: Controllable;

  create(params: IControllerParams): Promise<Controllable>;

  get(id: ControllerID): Promise<Controllable>;

  getAll(): Promise<Controllable[]>;

  filter(params: IControllerParams): Promise<Controllable[]>;

  update(id: ControllerID, params: IControllerParams): Promise<Controllable>;

  delete(id: ControllerID): Promise<Controllable>;

  deleteAll(): Promise<Controllable[]>;
}

class Controller implements IController {
  constructor(public model: Controllable) {}

  create = async (params: IControllerParams) => await this.model.create(params);

  get = async (id: ControllerID) => await this.model.findById(id);

  getAll = async () => await this.model.find();

  filter = async (params: any) => {
    let nestedPath: string[] = [];
    const getEdgeNodePath = (params: any) => {
      for (let param in params) {
        if (typeof params[param] === "object") {
          if (Object.keys(params[param]).length < 2) {
            nestedPath.push(param);
            getEdgeNodePath(params[param]);
          } else {
            throw new Error(
              "Can only filter by one (optionally nested) property"
            );
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
    getEdgeNodePath(params);
    const edgeNodePath = nestedPath.join("."); // key1.key2.key3
    const edgeNodeValue = getProperty(nestedPath.join("."), params); // value at key1.key2.key3
    return await this.model.find({ [edgeNodePath]: edgeNodeValue }).exec(); // All documents that match key-value
  };

  async update(id: ControllerID, params: IControllerParams) {
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

export { Controllable, Controller };
