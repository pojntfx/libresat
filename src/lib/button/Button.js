import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

export const Button = ({ value, ...otherProps }) => (
  <ButtonWrapper {...otherProps}>{value}</ButtonWrapper>
);

Button.propTypes = {
  value: PropTypes.string.isRequired
};

const ButtonWrapper = styled.button``;
