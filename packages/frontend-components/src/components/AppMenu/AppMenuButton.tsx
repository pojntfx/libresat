import * as React from "react";
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
    {linkComponent(
      link,
      <AppMenuButtonContent
        title={title}
        icon={icon}
        link={link}
        {...otherProps}
      />
    )}
  </Help>
);

export { AppMenuButton };
