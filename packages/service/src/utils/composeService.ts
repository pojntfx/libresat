import { IComposeService } from "./composeService.types";

const composeService = ({ name, server, database }: IComposeService) => {
  return {
    name,
    server,
    database
  };
};

export { composeService };
