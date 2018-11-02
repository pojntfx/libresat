import { AccordionTitleProps } from "semantic-ui-react";

interface IExpandProps {
  title: string;
  children: JSX.Element | JSX.Element[];
  disabled?: boolean;
}

interface IExpandViewProps extends IExpandProps {
  open: AccordionTitleProps["active"];
  onToggle: AccordionTitleProps["onClick"];
}

export { IExpandProps, IExpandViewProps };
