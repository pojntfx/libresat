import * as React from "react";
import { MainMenu } from "./MainMenu";
import { NavLink } from "react-router-dom";
import { CenterMenu } from "./CenterMenu";
import { SemanticICONS, Menu, Icon } from "semantic-ui-react";
import { EdgeMenu } from "./EdgeMenu";

interface INavbarProps {
  firstItems: IItem[];
  startItems: IItem[];
  endItems: IItem[];
  lastItems: IItem[];
}

interface IItem {
  title: string;
  icon?: SemanticICONS;
  link: string;
  disabled?: boolean;
}

const Navbar = ({
  firstItems,
  startItems,
  endItems,
  lastItems,
  ...otherProps
}: INavbarProps) => (
  <MainMenu borderless fixed="top" {...otherProps}>
    <EdgeMenu>
      {firstItems.map(({ title, icon, link, disabled }, index) => (
        // If something custom is needed here, just add the component directly
        <Menu.Item
          to={link}
          disabled={disabled}
          as={NavLink}
          activeClassName="active--first-item"
          key={index}
        >
          {icon ? <Icon name={icon} /> : null}
          {title}
        </Menu.Item>
      ))}
    </EdgeMenu>
    <CenterMenu>
      {startItems.map(({ title, icon, link, disabled }, index) => (
        <Menu.Item
          name={title}
          icon={icon}
          to={link}
          disabled={disabled}
          as={NavLink}
          key={index}
        />
      ))}
      <Menu.Menu position="right">
        {endItems.map(({ title, icon, link, disabled }, index) => (
          <Menu.Item
            name={title}
            icon={icon}
            to={link}
            disabled={disabled}
            as={NavLink}
            key={index}
          />
        ))}
      </Menu.Menu>
    </CenterMenu>
    <EdgeMenu>
      {lastItems.map(({ title, icon, link, disabled }, index) => (
        // If something custom is needed here, just add the component directly
        <Menu.Item
          name={title}
          icon={icon}
          to={link}
          disabled={disabled}
          as={NavLink}
          key={index}
        />
      ))}
    </EdgeMenu>
  </MainMenu>
);

export { Navbar, INavbarProps };
