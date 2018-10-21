import * as React from "react";
import { MainMenu } from "./MainMenu";
import { NavLink } from "react-router-dom";
import { CenterMenu } from "./CenterMenu";
import { Menu, Icon } from "semantic-ui-react";
import { EdgeMenu } from "./EdgeMenu";
import { Logo } from "./Logo";
import { EdgeItem } from "./EdgeItem";
import { INavbarProps } from "../../../types";

const Navbar = ({
  brand,
  firstItems,
  startItems,
  endItems,
  lastItems,
  ...otherProps
}: INavbarProps) => (
  <MainMenu borderless fixed="top" {...otherProps}>
    <EdgeItem
      to={brand.link}
      disabled={brand.disabled}
      as={NavLink}
      activeClassName="active--first-item"
    >
      <Logo src={brand.img} alt={brand.title} />
    </EdgeItem>
    <EdgeMenu>
      {/* If something custom is needed here, just add the component directly */}
      {firstItems.map(({ title, icon, link, disabled }, index) => (
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
          exact={link === "/" ? true : undefined}
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
      {/* If something custom is needed here, just add the component directly */}
      {lastItems.map(({ title, icon, link, disabled }, index) => (
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

export { Navbar };
