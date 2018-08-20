import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A button.
 * @param {value} value The text in the button
 * @param {onClick} onClick Event handler (gets fired when the button has been clicked)
 * @param {context} context Whether the button triggers an additive, modifying or destructive action
 * @param {primary} primary Whether the button is the primary/main call to action
 * @param {...otherProps} ...otherProps Other props that should be passed to the button, i.e. "disabled"
 */
export const Button = ({ value, onClick, context, primary, ...otherProps }) => (
  <ButtonWrapper
    onClick={onClick}
    context={context}
    primary={primary}
    {...otherProps}
  >
    {value}
  </ButtonWrapper>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  context: PropTypes.oneOf(["positive", "warning", "negative"]),
  primary: PropTypes.bool
};

const ButtonWrapper = styled.button`
  color: ${({ primary, active, context, theme: { colors: { buttons } } }) =>
    primary || active
      ? context
        ? buttons[context].primary.default
        : buttons.default.primary.default
      : context
        ? buttons[context].light.default
        : buttons.default.light.default};
  background: ${({
    primary,
    active,
    context,
    theme: { backgrounds: { buttons } }
  }) =>
    primary || active
      ? context
        ? buttons[context].primary.default
        : buttons.default.primary.default
      : context
        ? buttons[context].light.default
        : buttons.default.light.default};
  padding: ${({ theme: { paddings: { buttons } } }) => buttons};
  border-radius: ${({ theme: { radiuses: { buttons } } }) => buttons};
  transition: background ${({ theme: { transitions: { buttons } } }) => buttons},
    box-shadow ${({ theme: { transitions: { buttons } } }) => buttons};
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  border: 0;
  outline: 0;
  &:active,
  &:focus {
    color: ${({ primary, active, context, theme: { colors: { buttons } } }) =>
      primary || active
        ? context
          ? buttons[context].primary.active
          : buttons.default.primary.active
        : context
          ? buttons[context].light.active
          : buttons.default.light.active}!important;
    background: ${({
      primary,
      active,
      context,
      theme: { backgrounds: { buttons } }
    }) =>
      primary || active
        ? context
          ? buttons[context].primary.active
          : buttons.default.primary.active
        : context
          ? buttons[context].light.active
          : buttons.default.light.active} !important;
    box-shadow: ${({ theme: { shadows: { defaultInset } } }) => defaultInset};
  }
  &:not(:hover) {
    &:active,
    &:focus {
      color: ${({
        primary,
        active,
        context,
        theme: { colors: { buttons } }
      }) =>
        primary || active
          ? context
            ? buttons[context].primary.default
            : buttons.default.primary.default
          : context
            ? buttons[context].light.default
            : buttons.default.light.default}!important;
      background: ${({
        primary,
        active,
        context,
        theme: { backgrounds: { buttons } }
      }) =>
        primary || active
          ? context
            ? buttons[context].primary.default
            : buttons.default.primary.default
          : context
            ? buttons[context].light.default
            : buttons.default.light.default} !important;
      box-shadow: ${({ theme: { shadows: { defaultInset } } }) => defaultInset};
    }
  }
  &:hover {
    color: ${({ primary, active, context, theme: { colors: { buttons } } }) =>
      primary || active
        ? context
          ? buttons[context].primary.hover
          : buttons.default.primary.hover
        : context ? buttons[context].light.hover : buttons.default.light.hover};
    background: ${({
      primary,
      active,
      context,
      theme: { backgrounds: { buttons } }
    }) =>
      primary || active
        ? context
          ? buttons[context].primary.hover
          : buttons.default.primary.hover
        : context ? buttons[context].light.hover : buttons.default.light.hover};
  }
`;
