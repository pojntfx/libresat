import React from "react";
import { Menu } from "semantic-ui-react";
import { withPrefix } from "gatsby";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "./Link";

const MainMenu = styled(Menu)`
  overflow-x: auto;
  position: sticky !important;
  top: 0;
`;

const CenterMenu = styled(Menu.Menu)`
  margin: 0 auto !important;
  @media (min-width: 1200px) {
    width: 1127px;
  }
`;

const EdgeItem = styled(Menu.Item)`
  width: 11em;
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
`;

const Logo = styled.img`
  height: 30px;
  width: auto !important;
`;

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: "item active" } : null;

const NavbarView = ({
  data: {
    siteYaml: { title },
    navbarYaml: { logoUrl, startItems, endItems, endItem },
    ...otherProps
  }
}) => (
  <MainMenu borderless fixed="top" {...otherProps}>
    <EdgeItem as={Link} to="/">
      <Logo src={withPrefix(logoUrl)} alt={`${title} Logo`} />
    </EdgeItem>
    <CenterMenu>
      {startItems.map(({ label, icon, link, disabled }, index) => (
        <Menu.Item
          key={index}
          as={Link}
          name={label}
          icon={icon}
          to={link}
          disabled={disabled}
          activeClassName={link === "/" ? "active" : undefined}
          getProps={link === "/" ? undefined : isPartiallyActive}
        />
      ))}
      <Menu.Menu position="right">
        {endItems.map(({ label, icon, link, disabled }, index) => (
          <Menu.Item
            key={index}
            as={Link}
            name={label}
            icon={icon}
            to={link}
            disabled={disabled}
            getProps={isPartiallyActive}
          />
        ))}
      </Menu.Menu>
    </CenterMenu>
    <EdgeItem
      as={Link}
      icon={endItem.icon}
      name={endItem.label}
      to={endItem.link}
      disabled={endItem.disabled}
      getProps={isPartiallyActive}
    />
  </MainMenu>
);

export const Navbar = () => (
  <StaticQuery
    query={graphql`
      query NavbarQuery {
        navbarYaml {
          logoUrl
          startItems {
            label
            icon
            link
            disabled
          }
          endItems {
            label
            icon
            link
            disabled
          }
          endItem {
            label
            icon
            link
            disabled
          }
        }
        siteYaml {
          title
        }
      }
    `}
    render={data => <NavbarView data={data} />}
  />
);
