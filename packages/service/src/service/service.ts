import { IService } from "./service.types";

class Service implements IService {
  constructor(public name: IService["name"], public services: IService[]) {}
}

export { Service };
