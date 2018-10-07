import * as React from "react";
import { MainMenu } from "./MainMenu";
import { EdgeItem } from "./EdgeItem";
import { NavLink } from "react-router-dom";
import { CenterMenu } from "./CenterMenu";
import { SemanticICONS, Menu } from "semantic-ui-react";

interface INavbarProps {
  title: string;
  subtitle: string;
  homeLink: string;
  startItems: IItem[];
}

interface IItem {
  title: string;
  icon: SemanticICONS;
  link: string;
  disabled?: boolean;
}

const Navbar = ({
  title,
  subtitle,
  homeLink,
  startItems,
  ...otherProps
}: INavbarProps) => (
  <MainMenu borderless fixed="top" {...otherProps}>
    <EdgeItem as={NavLink} to={homeLink}>
      {title} / {subtitle}
    </EdgeItem>
    <CenterMenu>
      {startItems.map(({ title, icon, link, disabled }, index) => (
        <Menu.Item
          name={title}
          icon={icon}
          to={link}
          disabled={disabled}
          as={NavLink}
          activeClassName="active"
          key={index}
        />
      ))}
    </CenterMenu>
  </MainMenu>
);

export { Navbar, INavbarProps };
