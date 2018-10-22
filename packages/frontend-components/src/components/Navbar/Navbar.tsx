import * as React from "react";
import { MainMenu } from "./MainMenu";
import { NavLink } from "react-router-dom";
import { CenterMenu } from "./CenterMenu";
import { Menu, Icon } from "semantic-ui-react";
import { EdgeMenu } from "./EdgeMenu";
import { Logo } from "./Logo";
import { EdgeItem } from "./EdgeItem";
import { Help } from "../Help/Help";
import { INavbarProps } from "../../types";

const Navbar = ({
  brand,
  firstItems,
  startItems,
  endItems,
  lastItems,
  ...otherProps
}: INavbarProps) => (
  <MainMenu borderless fixed="top" {...otherProps}>
    <Help {...brand.help}>
      <EdgeItem
        to={brand.link}
        disabled={brand.disabled}
        as={NavLink}
        activeClassName="active--edge-item"
      >
        <Logo src={brand.img} alt={brand.title} />
      </EdgeItem>
    </Help>
    <EdgeMenu>
      {/* If something custom is needed here, just add the component directly */}
      {firstItems.map(({ title, icon, link, disabled, help }, index) => (
        <Help key={index} {...help}>
          <Menu.Item
            to={link}
            disabled={disabled}
            as={NavLink}
            activeClassName="active active--first-item"
          >
            {icon ? <Icon name={icon} /> : null}
            {title}
          </Menu.Item>
        </Help>
      ))}
    </EdgeMenu>
    <CenterMenu>
      {startItems.map(({ title, icon, link, disabled, help }, index) => (
        <Help key={index} {...help}>
          <Menu.Item
            name={title}
            icon={icon}
            to={link}
            disabled={disabled}
            exact={link === "/" ? true : undefined}
            as={NavLink}
            activeClassName="active active--center-item"
            key={index}
          />
        </Help>
      ))}
      <Menu.Menu position="right">
        {endItems.map(({ title, icon, link, disabled, help }, index) => (
          <Help key={index} {...help}>
            <Menu.Item
              name={title}
              icon={icon}
              to={link}
              disabled={disabled}
              as={NavLink}
              activeClassName="active active--end-item"
              key={index}
            />
          </Help>
        ))}
      </Menu.Menu>
    </CenterMenu>
    <EdgeMenu>
      {/* If something custom is needed here, just add the component directly */}
      {lastItems.map(({ title, icon, link, disabled, help }, index) => (
        <Help key={index} {...help}>
          <Menu.Item
            name={title}
            icon={icon}
            to={link}
            disabled={disabled}
            as={NavLink}
            activeClassName="active active--last-item"
            key={index}
          />
        </Help>
      ))}
    </EdgeMenu>
  </MainMenu>
);

export { Navbar };
