import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

// Style constants
import { paddings, colors, radiuses, shadows } from "../constants";

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
  margin: 0;
  background: ${colors.white};
  border-radius: ${radiuses.default};
  box-shadow: ${shadows.default};
  padding: ${paddings.default};
  position: absolute;
  ${({ left }) => (left ? `right: 0` : `left: 0`)};
  ${({ bottom }) => (bottom ? `top: 100%;` : `bottom: 100%;`)};
`;

const MenuItem = styled.li`
  list-style-type: none;
  white-space: nowrap;
  overflow-x: auto;
  &:not(:last-child) {
    margin-bottom: 1rem;
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
