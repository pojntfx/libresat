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
 * @param {..otherProps} ..otherProps Other props that should be passed to the TextArea
 */
export const TextArea = ({ label, value, name, onInput, ...otherProps }) => (
  <InputWrapper>
    <Label htmlFor={name}>{label}</Label>
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

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  margin-right: ${({
    theme: {
      paddings: { textAreas }
    }
  }) => textAreas};
`;

const TextAreaWrapper = styled.textarea`
  padding: ${({
    theme: {
      margins: { textAreas }
    }
  }) => textAreas};
  margin-left: ${({
    theme: {
      margins: { textAreas }
    }
  }) => textAreas};
  border-radius: ${({
    theme: {
      radiuses: { textAreas }
    }
  }) => textAreas};
  border: 1px solid
    ${({
      theme: {
        colors: { lightgrey }
      }
    }) => lightgrey};
  transition: background-color
      ${({
        theme: {
          transitions: { textAreas }
        }
      }) => textAreas},
    box-shadow
      ${({
        theme: {
          transitions: { textAreas }
        }
      }) => textAreas};
  resize: vertical;
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
          textAreas: { active }
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
            textAreas: { active }
          }
        }
      }) => active} !important;
    }
  }
  &:hover {
    background: ${({
      theme: {
        backgrounds: {
          textAreas: { hover }
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
