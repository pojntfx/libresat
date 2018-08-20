import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A text field (HTML5 input)
 * @param {label} label Label for the TextField
 * @param {value} value Content of the TextField
 * @param {name} name Unique identifier for the TextField
 * @param {type} type Type of the TextField (i.e. "text" or "password")
 * @param {..otherProps} ..otherProps Other props that should be passed to the TextField
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
    {label ? <Label htmlFor={name}>{label}</Label> : null}
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

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  margin-right: ${({
    theme: {
      paddings: { textFields }
    }
  }) => textFields};
`;

const TextFieldWrapper = styled.input`
  padding: ${({
    theme: {
      margins: { textFields }
    }
  }) => textFields};
  margin-left: ${(
    {
      theme: {
        margins: { textFields }
      }
    },
    label
  ) => (label ? textFields : 0)};
  border-radius: ${({
    theme: {
      radiuses: { textFields }
    }
  }) => textFields};
  border: 1px solid
    ${({
      theme: {
        colors: { lightgrey }
      }
    }) => lightgrey};
  transition: background-color
      ${({
        theme: {
          transitions: { textFields }
        }
      }) => textFields},
    box-shadow
      ${({
        theme: {
          transitions: { textFields }
        }
      }) => textFields};
  flex-grow: 1;
  outline: 0;
  &:active,
  &:focus {
    box-shadow: ${({
      theme: {
        shadows: { defaultInset }
      }
    }) => defaultInset};
    background: ${({
      theme: {
        backgrounds: {
          textFields: { active }
        }
      }
    }) => active} !important;
  }
  &:not(:hover) {
    &:active,
    &:focus {
      background: ${({
        theme: {
          backgrounds: {
            textFields: { active }
          }
        }
      }) => active} !important;
    }
  }
  &:hover {
    background: ${({
      theme: {
        backgrounds: {
          textFields: { hover }
        }
      }
    }) => hover};
  }
  &:disabled {
    background: ${({
      theme: {
        backgrounds: { bars }
      }
    }) => bars.default};
  }
`;
