import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A button.
 * @param {value} value The text in the button
 * @param {onClick} onClick Event handler (gets fired when the button has been clicked)
 * @param {equal} equal Whether all nearby buttons should have an equal width (used with tabs).
 * @param {...otherProps} ...otherProps Other (HTML5) props that should be passed to the button, i.e. "disabled"
 */
export const Button = ({ value, onClick, equal, ...otherProps }) => (
  <ButtonWrapper onClick={onClick} equal={equal} {...otherProps}>
    {value}
  </ButtonWrapper>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  equal: PropTypes.bool
};

const ButtonWrapper = styled.button`
  white-space: nowrap;
  ${({ equal }) => (equal ? "flex-grow: 1" : null)};
  padding: 0.5rem 0.75rem;
`;
