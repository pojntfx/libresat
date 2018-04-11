import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A button.
 * @param {value} value The text in the button
 * @param {onClick} onClick Event handler (gets fired when the button has been clicked)
 * @param {context} equal Whether the button triggers an additive, modifying or destructive action
 * @param {primary} primary Whether the button is the primary/main call to action
 * @param {equal} equal Whether all nearby buttons should have an equal width (used with tabs)
 * @param {...otherProps} ...otherProps Other (HTML5) props that should be passed to the button, i.e. "disabled"
 */
export const Button = ({
  value,
  onClick,
  context,
  primary,
  equal,
  ...otherProps
}) => (
  <ButtonWrapper2
    onClick={onClick}
    context={context}
    primary={primary}
    equal={equal}
    {...otherProps}
  >
    {value}
  </ButtonWrapper2>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  context: PropTypes.oneOf(["positive", "warning", "negative"]),
  primary: PropTypes.bool,
  equal: PropTypes.bool
};

const ButtonWrapper2 = styled.button`
  color: blue;
  background: transparent;
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  transition: background 0.25s, box-shadow 0.25s;
  white-space: nowrap;
  cursor: pointer;
  border: 0;
  outline: 0;
  &:active,
  &:focus {
    color: blue;
    background: darkgrey !important;
    box-shadow: inset 0 0px 2px rgba(32, 33, 36, 0.28);
  }
  &:not(:hover) {
    &:active,
    &:focus {
      color: blue;
      background: transparent !important;
      box-shadow: inset 0 0px 2px rgba(32, 33, 36, 0.28);
    }
  }
  &:hover {
    color: blue;
    background: lightgrey;
  }
`;

const ButtonWrapper = styled.button`
  color: ${({ context, primary, active, theme: { colors } }) =>
    primary || active
      ? context ? colors.buttons[context] : colors.buttons.primary
      : context ? colors.text[context] : colors.buttons.default};
  background: ${({ context, primary, active, theme: { backgrounds } }) =>
    primary
      ? context ? backgrounds[context] : backgrounds.primary
      : active
        ? context ? backgrounds[context] : backgrounds.primary
        : backgrounds.default};
  border-radius: ${({ theme: { radiuses } }) => radiuses.default};
  padding: ${({ theme: { paddings } }) => paddings.button};
  ${({ equal }) => (equal ? "flex-grow: 1" : null)};
  transition: ${({ theme: { transitions } }) =>
    "background " +
    transitions.defaultDuration +
    ", box-shadow " +
    transitions.defaultDuration};
  white-space: nowrap;
  cursor: pointer;
  border: 0;
  outline: 0;
  &:focus,
  &:active {
    background: ${({
      context,
      primary,
      active,
      theme: { backgrounds, colors }
    }) =>
      primary || active
        ? context ? backgrounds[context] : backgrounds.primary
        : colors.darkgrey}!important;
    box-shadow: ${({ theme: { shadows } }) => shadows.defaultInset};
  }
  &:not(:hover) {
    &:focus,
    &:active {
      background: ${({ context, primary, active, theme: { backgrounds } }) =>
        primary || active
          ? context ? backgrounds[context] : backgrounds.primary
          : backgrounds.default}!important;
    }
  }
  &:hover {
    background: ${({
      context,
      primary,
      active,
      theme: { backgrounds, colors }
    }) =>
      primary || active
        ? context ? backgrounds[context] : backgrounds.primary
        : colors.lightgrey};
  }
`;
