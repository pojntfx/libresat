import { CardProps } from "semantic-ui-react";

interface ICoverflowProps {
  items: ICoverflowItemProps[] & CardProps;
  linkComponent: JSX.Element;
}

interface ICoverflowItemProps {
  link?: string;
}

export { ICoverflowProps, ICoverflowItemProps };
