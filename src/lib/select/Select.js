import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

export const Select = ({
  name,
  label,
  onInput,
  children,
  value,
  ...otherProps
}) => (
  <InputWrapper>
    <label htmlFor={name}>{label}</label>
    <select
      name={name}
      id={name}
      onChange={onInput}
      defaultValue={value}
      {...otherProps}
    >
      {children}
    </select>
  </InputWrapper>
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  value: PropTypes.string.isRequired
};

const InputWrapper = styled.div``;
