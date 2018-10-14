import { IHelp } from "./help.type";

interface IActionBarProps {
  create: {
    title: string;
    icon: string;
    onCreate(): any;
    help: IHelp;
    disabled: boolean;
  };
  search: {
    text: string;
    icon: string;
    value: string;
    onSearch(): any;
    help: IHelp;
    disabled: boolean;
  };
}

export { IActionBarProps };
