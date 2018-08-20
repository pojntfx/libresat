import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A Navigation.
 * @param {children} children Links in the Nav
 * @param {...otherProps} ...otherProps Other props that should be passed to the Nav
 */
export const Nav = ({ children, ...otherProps }) => (
  <NavItemList {...otherProps}>
    {children.map((child, index) => <NavItem key={index}>{child}</NavItem>)}
  </NavItemList>
);

const NavItemList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow-x: auto;
`;

const NavItem = styled.li`
  list-style-type: none;
  white-space: nowrap;
  &:not(:last-child) {
    margin-right: ${({ theme: { margins: { nav } } }) => nav};
  }
`;

Nav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};
