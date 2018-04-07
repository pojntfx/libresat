import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

// Style constants
import {
  paddings,
  margins,
  radiuses,
  colors,
  shadows,
  transitions
} from "../constants";

/**
 * A text field (HTML5 input)
 * @param {label} label Label for the TextField
 * @param {value} value Content of the TextField
 * @param {name} name Unique identifier for the TextField
 * @param {type} type Type of the TextField (i.e. "text" or "password")
 * @param {..otherProps} ..otherProps Other HTML5 props
 */
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
    <TextFieldWrapper
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

const TextFieldWrapper = styled.input`
  padding: ${paddings.default};
  flex-grow: 1;
  margin-left: ${margins.default};
  border-radius: ${radiuses.default};
  outline: 0;
  border: 1px solid ${colors.darkgrey};
  &:hover:not(:focus) {
    background: ${colors.lightgrey};
  }
  &:focus {
    box-shadow: ${shadows.defaultInset};
  }
  transition: background ${transitions.defaultDuration},
    box-shadow ${transitions.defaultDuration};
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
