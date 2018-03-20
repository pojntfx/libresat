import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A slider (HTML5 "range" input)
 * @param {value} value The slider's current value
 * @param {label} label A description of what information to enter
 * @param {name} name Unique identifier
 * @param {onChange} onChange Event handler (gets fired when content has been modified)
 * @param {...otherProps} ...otherProps Other (HTML5) props that should be passed to the slider
 */
export const Slider = ({ value, label, name, onChange, ...otherProps }) => (
  <InputWrapper>
    <label htmlFor={name}>{label}</label>
    <input
      type="range"
      name={name}
      id={name}
      onChange={onChange}
      value={value}
      {...otherProps}
    />
  </InputWrapper>
);

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const InputWrapper = styled.div``;
