import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

// Style constants
import {
  backgrounds,
  colors,
  paddings,
  radiuses,
  shadows,
  transitions
} from "../constants";

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
  <ButtonWrapper
    onClick={onClick}
    context={context}
    primary={primary}
    equal={equal}
    {...otherProps}
  >
    {value}
  </ButtonWrapper>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  context: PropTypes.oneOf(["positive", "warning", "negative"]),
  primary: PropTypes.bool,
  equal: PropTypes.bool
};

const ButtonWrapper = styled.button`
  white-space: nowrap;
  cursor: pointer;
  border: 0;
  outline: 0;
  color: ${({ context, primary, active }) =>
    primary || active
      ? context ? colors.buttons[context] : colors.buttons.primary
      : context ? colors.text[context] : colors.buttons.default};
  background: ${({ context, primary, active }) =>
    primary
      ? context ? backgrounds[context] : backgrounds.primary
      : active
        ? context ? backgrounds[context] : backgrounds.primary
        : backgrounds.default};
  border-radius: ${radiuses.default};
  padding: ${paddings.button};
  ${({ equal }) => (equal ? "flex-grow: 1" : null)};
  &:hover {
    background: ${({ context, primary, active }) =>
      primary || active
        ? context ? backgrounds[context] : backgrounds.primary
        : colors.lightgrey};
  }
  &:focus {
    background: ${({ context, primary, active }) =>
      primary || active
        ? context ? backgrounds[context] : backgrounds.primary
        : colors.darkgrey};
    box-shadow: ${shadows.defaultInset};
  }
  transition: background ${transitions.defaultDuration};
`;
