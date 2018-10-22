import * as React from "react";
import { Button, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { AppMenuButtonHeader } from "./AppMenuButtonHeader";
import { Help } from "../Help/Help";
import { IAppButtonProps } from "../../types";
import { AppMenuButtonContent } from "./AppMenuButtonContent";

const AppMenuButton = ({
  title,
  icon,
  help,
  link,
  linkComponent,
  ...otherProps
}: IAppButtonProps) => (
  <Help {...help}>
    {linkComponent ? (
      React.cloneElement(
        linkComponent,
        { to: link },
        <AppMenuButtonContent title={title} icon={icon} link={link} />
      )
    ) : (
      <NavLink to={link}>
        <AppMenuButtonContent title={title} icon={icon} link={link} />
      </NavLink>
    )}
  </Help>
);

export { AppMenuButton };
