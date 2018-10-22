import { IHelp } from "./help.type";

interface IActionBarProps {
  create: {
    title: string;
    icon: string;
    onCreate(): any;
    disabled: boolean;
    help: IHelp;
  };
  search: {
    text: string;
    icon: string;
    value: string;
    onSearch(): any;
    disabled: boolean;
    help: IHelp;
  };
}

export { IActionBarProps };
