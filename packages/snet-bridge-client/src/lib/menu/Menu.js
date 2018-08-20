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
 * @param {children} children Actions in the Menu
 * @param {left} left Whether the menu should float to the left or not
 * @param {bottom} Bottom Whether the menu should be attached to the top or the bottom
 * @param {...otherProps} ...otherProps Other props that should be passed to the Menu activation button
 */
export const Menu = ({
  label,
  onClick,
  onInnerClick,
  active,
  children,
  left,
  bottom,
  ...otherProps
}) => (
  <MenuWrapper>
    <MenuActivator value={label} onClick={onClick} {...otherProps} />
    {active ? (
      <MenuItemWrapper left={left} bottom={bottom} onClick={onInnerClick}>
        {children.map((action, index) => (
          <MenuItem key={index}>{action}</MenuItem>
        ))}
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
  background: ${({
    theme: {
      backgrounds: { menus }
    }
  }) => menus.default};
  border-radius: ${({ theme: { radiuses } }) => radiuses.default};
  box-shadow: ${({ theme: { shadows } }) => shadows.default};
  padding: ${({ theme: { paddings } }) => paddings.default};
  ${({ left }) => (left ? `right: 0` : `left: 0`)};
  ${({ bottom }) => (bottom ? `top: 100%;` : `bottom: 100%;`)};
  display: flex;
  flex-direction: column;
  margin: 0;
  position: absolute;
`;

const MenuItem = styled.li`
  list-style-type: none;
  white-space: nowrap;
  overflow-x: auto;
  &:not(:last-child) {
    margin-bottom: ${({ theme: { margins } }) => margins.default};
  }
`;

Menu.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onInnerClick: PropTypes.func,
  active: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  left: PropTypes.bool,
  bottom: PropTypes.bool
};
