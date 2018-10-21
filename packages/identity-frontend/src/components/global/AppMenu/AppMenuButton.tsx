import * as React from "react";
import { Button, Icon } from "semantic-ui-react";
import { IAppButtonProps } from "../../../types";
import { Link } from "react-router-dom";
import { AppMenuButtonHeader } from "./AppMenuButtonHeader";
import { Help } from "../Help/Help";

const AppMenuButton = ({
  title,
  icon,
  help,
  link,
  ...otherProps
}: IAppButtonProps) => (
  <Help
    {...help}
    trigger={
      <Link to={link}>
        <Button fluid {...otherProps}>
          <AppMenuButtonHeader icon as="h5">
            <Icon name={icon} />
            {title}
          </AppMenuButtonHeader>
        </Button>
      </Link>
    }
  />
);

export { AppMenuButton, IAppButtonProps };
