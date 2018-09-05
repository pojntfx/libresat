import { IService } from "./service.types";

class Service implements IService {
  constructor(public name: IService["name"], public services: IService[]) {}

  start() {
    console.log(`${this.name} has started!`);
    return this;
  }
}

export { Service };
