import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A select's option.
 * @param {value} value The value that the select should return when this option has been selected
 * @param {text} text The option's text that will be displayed
 * @param {...otherProps} ...otherProps Other props that should be passed to the option
 */
export const Option = ({ value, text, ...otherProps }) => (
  <OptionWrapper value={value} {...otherProps}>
    {text}
  </OptionWrapper>
);

Option.propTypes = {
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const OptionWrapper = styled.option``;
