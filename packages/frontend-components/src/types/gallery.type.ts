import { CardProps } from "semantic-ui-react";

interface IGalleryProps {
  items: IGalleryItemProps[] & CardProps;
  linkComponent: JSX.Element;
}

interface IGalleryItemProps {
  link?: string;
}

export { IGalleryProps, IGalleryItemProps };
