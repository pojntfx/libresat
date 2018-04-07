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
 * A text area (HTML5 textarea).
 * @param {label} label Label for the TextArea
 * @param {value} value Content of the TextArea
 * @param {name} name Unique identifier for the TextArea
 * @param {..otherProps} ..otherProps Other HTML5 props
 */
export const TextArea = ({ label, value, name, onInput, ...otherProps }) => (
  <InputWrapper>
    <label htmlFor={name}>{label}</label>
    <TextAreaWrapper
      name={name}
      id={name}
      value={value}
      onChange={onInput}
      {...otherProps}
    />
  </InputWrapper>
);

TextArea.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired
};

const TextAreaWrapper = styled.textarea`
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
  resize: vertical;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
