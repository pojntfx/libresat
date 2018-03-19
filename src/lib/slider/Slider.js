import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

export const Slider = ({ value, label, name, onChange, ...otherProps }) => (
  <InputWrapper>
    <label htmlFor={name}>{label}</label>
    <input
      type="range"
      name={name}
      id={name}
      onChange={onChange}
      defaultValue={value}
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
