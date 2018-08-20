import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A CheckBox.
 * @param {on} on Whether the CheckBox is checked or not
 * @param {label} label A description of what the CheckBox checks
 * @param {name} name Unique identifier
 * @param {onClick} onClick Event handler (gets fired when the user clicks the CheckBox)
 * @param {...otherProps} ...otherProps Other props that should be passed to the CheckBox
 */
export const CheckBox = ({ on, label, name, onClick, ...otherProps }) => (
  <CheckBoxWrapper>
    <Label>{label}</Label>
    <InputWrapper
      type="checkbox"
      name={name}
      id={name}
      checked={on}
      onChange={onClick}
      {...otherProps}
    />
    <Toggle htmlFor={name}>Toggle</Toggle>
  </CheckBoxWrapper>
);

CheckBox.propTypes = {
  on: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Label = styled.span`
  margin-right: ${({ theme: { margins: { switches } } }) => switches};
`;
const Toggle = styled.label`
  background: ${({ theme: { backgrounds: { bars } } }) => bars.default};
  border-radius: ${({ theme: { radiuses: { switches } } }) => switches};
  transition: background-color
      ${({ theme: { transitions: { switches } } }) => switches},
    box-shadow ${({ theme: { transitions: { switches } } }) => switches};
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  text-indent: -9999px;
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  &:after {
    background: ${({ theme: { colors: { white } } }) => white};
    border-radius: calc(
      ${({ theme: { radiuses: { switches } } }) => switches} - 0.1rem
    );
    transition: ${({ theme: { transitions: { switches } } }) => switches};
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
    margin: 0.1rem;
    top: 0;
    left: 0;
    content: "";
  }
  &:active,
  &:focus {
    box-shadow: ${({ theme: { shadows: { defaultInset } } }) => defaultInset};
    &:after {
      background: ${({ theme: { colors: { darkgrey } } }) =>
        darkgrey} !important;
    }
  }
  &:not(:hover) {
    &:active,
    &:focus {
      &:after {
        background: ${({ theme: { colors: { white } } }) => white} !important;
      }
    }
  }
  &:hover {
    &:after {
      background: ${({ theme: { colors: { lightgrey } } }) => lightgrey};
    }
  }
  &:disabled {
    background: ${({ theme: { backgrounds: { bars } } }) => bars.default};
  }
`;
const InputWrapper = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  transition: background-color ${({ theme: { transitions: { switches } } }) => switches};
  &:checked + label {
    background: ${({ theme: { colors: { positive } } }) => positive};
    &:active:after {
      margin: 0.5rem;
      width: 1rem;
      height: 1rem;
    }
  }
  & + label {
    &:active:after {
      margin: 0.5rem;
      width: 1rem;
      height: 1rem;
    }
  }
  &:checked + label:after {
    margin: 0.375rem;
    width: 1.25rem;
    height: 1.25rem;
  }
`;
