import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A text area (HTML5 textarea).
 * @param {label} label Label for the TextArea
 * @param {value} value Content of the TextArea
 * @param {name} name Unique identifier for the TextArea
 * @param {..otherProps} ..otherProps Other HTML5 props
 */
export const TextArea = ({ label, value, name, onInput, ...otherProps }) => (
  <InputWrapper>
    <label htmlFor={name}>{label}</label>
    <textarea
      name={name}
      id={name}
      value={value}
      onChange={onInput}
      {...otherProps}
    />
  </InputWrapper>
);

TextArea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired
};

const InputWrapper = styled.div``;
