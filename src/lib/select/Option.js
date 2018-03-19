import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

export const Option = ({ value, onClick, text, ...otherProps }) => (
  <OptionWrapper value={value} onChange={onClick} {...otherProps}>
    {text}
  </OptionWrapper>
);

Option.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

const OptionWrapper = styled.option``;
