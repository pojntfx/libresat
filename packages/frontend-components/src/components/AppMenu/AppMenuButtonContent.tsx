import * as React from "react";
import { Button } from "../Button";
import { AppMenuButtonHeader } from "./AppMenuButtonHeader";
import { Icon } from "semantic-ui-react";
import { IAppButtonContentProps } from "../../types";

const AppMenuButtonContent = ({
  link,
  icon,
  title,
  ...otherProps
}: IAppButtonContentProps) => (
  <Button active={link === "/identity" ? true : false} fluid {...otherProps}>
    <AppMenuButtonHeader icon as="h5">
      <Icon name={icon} />
      {title}
    </AppMenuButtonHeader>
  </Button>
);

export { AppMenuButtonContent };
