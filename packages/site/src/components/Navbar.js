import React from "react";
import { Menu } from "semantic-ui-react";
import { withPrefix } from "gatsby";
import styled from "styled-components";

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

export const Navbar = props => (
  <MainMenu borderless fixed="top" {...props}>
    <EdgeItem>
      <Logo src={withPrefix("/img/logo.png")} alt="LibreSat Logo" />
    </EdgeItem>
    <CenterMenu>
      <Menu.Item icon="home" name="Home" active />
      <Menu.Item icon="code" name="Software" />
      <Menu.Item icon="microchip" name="Hardware" />
      <Menu.Item icon="globe" name="Network" />
      <Menu.Item icon="book" name="Docs" />
      <Menu.Menu position="right">
        <Menu.Item icon="rss" name="Blog" />
        <Menu.Item icon="eye" name="Demo" />
        <Menu.Item icon="slideshare" name="Wiki" />
        <Menu.Item icon="users" name="Forum" />
        <Menu.Item icon="conversation" name="Chat" />
      </Menu.Menu>
    </CenterMenu>
    <EdgeItem icon="fork" name="Source Code" />
  </MainMenu>
);
