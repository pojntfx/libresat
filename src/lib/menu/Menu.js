import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

// Components
import { Button } from "../button/Button";

/**
 * A Menu with actions.
 * @param {label} label Text of the Menu activation button
 * @param {onClick} onClick Event handler (gets fired when the user clicks the Menu activation button)
 * @param {onInnerClick} onInnerClick Event handler (gets fired when the user clicks a Menu's action)
 * @param {active} active Whether the menu is open or not
 * @param {actions} actions Actions in the Menu
 * @param {left} left Whether the menu should float to the left or not
 * @param {bottom} Bottom Whether the menu should be attached to the top or the bottom
 * @param {...otherProps} ...otherProps Other (HTML5 or React) props that should be passed to the Menu activation button
 */
export const Menu = ({
  label,
  onClick,
  onInnerClick,
  active,
  actions,
  left,
  bottom,
  ...otherProps
}) => (
  <MenuWrapper>
    <MenuActivator value={label} onClick={onClick} {...otherProps} />
    {active ? (
      <MenuItemWrapper left={left} bottom={bottom} onClick={onInnerClick}>
        {actions.map(action =>
          action.props.children.map((actionItem, index) => (
            <MenuItem key={index}>{actionItem}</MenuItem>
          ))
        )}
      </MenuItemWrapper>
    ) : null}
  </MenuWrapper>
);

const MenuActivator = styled(Button)``;

const MenuWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const MenuItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin: 0;
  background: #ffffff;
  border: 1px solid #000000;
  position: absolute;
  ${({ left }) => (left ? `right: 0` : `left: 0`)};
  ${({ bottom }) => (bottom ? `top: 100%;` : `bottom: 100%;`)};
`;

const MenuItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid #000000;
  list-style-type: none;
  white-space: nowrap;
  overflow-x: auto;}
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
    border-bottom: solid 0;
  }
`;

Menu.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onInnerClick: PropTypes.func,
  active: PropTypes.bool.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node).isRequired,
  left: PropTypes.bool,
  bottom: PropTypes.bool
};
