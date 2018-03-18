import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

export const Switch = ({ on, label, name, onClick, ...otherProps }) => (
  <InputWrapper>
    <label htmlFor={name}>{label}</label>
    <input
      type="checkbox"
      name={name}
      id={name}
      defaultChecked={on}
      onChange={onClick}
      {...otherProps}
    />
  </InputWrapper>
);

Switch.propTypes = {
  on: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const InputWrapper = styled.div``;
