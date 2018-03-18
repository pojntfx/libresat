import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

export const TextField = ({
  label,
  value,
  type,
  name,
  onInput,
  ...otherProps
}) => (
  <InputWrapper>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onInput}
      {...otherProps}
    />
  </InputWrapper>
);

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired
};

const InputWrapper = styled.div``;
