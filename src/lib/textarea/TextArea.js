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
  padding: ${({ theme: { paddings } }) => paddings.default};
  margin-left: ${({ theme: { margins } }) => margins.default};
  border-radius: ${({ theme: { radiuses } }) => radiuses.default};
  border: 1px solid ${({ theme: { colors } }) => colors.darkgrey};
  transition: background
      ${({ theme: { transitions } }) => transitions.defaultDuration},
    box-shadow ${({ theme: { transitions } }) => transitions.defaultDuration};
  flex-grow: 1;
  outline: 0;
  resize: vertical;
  &:hover:not(:focus) {
    background: ${({ theme: { colors } }) => colors.lightgrey};
  }
  &:focus {
    box-shadow: ${({ theme: { shadows } }) => shadows.defaultInset};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
