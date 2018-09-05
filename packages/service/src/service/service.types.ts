interface IServiceStarter {
  (): IService;
}

interface IService {
  name: string;
  start: IServiceStarter;
}

export { IService };
