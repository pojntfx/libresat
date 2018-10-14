import { IHelp } from "./help.type";

interface IActionBarProps {
  create: {
    title: string;
    icon: string;
    onCreate(): any;
    help: IHelp;
  };
  search: {
    text: string;
    icon: string;
    value: string;
    onSearch(): any;
    help: IHelp;
  };
}

export { IActionBarProps };
