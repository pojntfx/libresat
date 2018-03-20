import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A button.
 * @param {value} value The text in the button
 * @param {onClick} onClick Event handler (gets fired when the button has been clicked)
 * @param {...otherProps} ...otherProps Other (HTML5) props that should be passed to the button, i.e. "disabled"
 */
export const Button = ({ value, onClick, ...otherProps }) => (
  <ButtonWrapper onClick={onClick} {...otherProps}>
    {value}
  </ButtonWrapper>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const ButtonWrapper = styled.button``;
