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
 * @param {...otherProps} ...otherProps Other (HTML5) props that should be passed to the CheckBox
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
  margin-right: ${({ theme: { margins } }) => margins.default};
`;
const Toggle = styled.label`
  background: ${({ theme: { colors } }) => colors.darkgrey};
  border-radius: ${({ theme: { radiuses } }) => radiuses.default};
  transition: background-color
    ${({ theme: { transitions } }) => transitions.defaultDuration} ease-out;
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;
  text-indent: -9999px;
  display: inline-block;
  position: relative;
  &:after {
    box-shadow: ${({ theme: { shadows } }) => shadows.default};
    background: ${({ theme: { colors } }) => colors.white};
    border-radius: calc(
      ${({ theme: { radiuses } }) => radiuses.default} - 0.1rem
    );
    transition: ${({ theme: { transitions } }) => transitions.defaultDuration};
    content: "";
    position: absolute;
    margin: 0.1rem;
    top: 0;
    left: 0;
    width: 2rem;
    height: 2rem;
  }
  &:hover {
    &:after {
      background: ${({ theme: { colors } }) => colors.lightgrey};
    }
  }
  &:disabled {
    background: ${({ theme: { colors } }) => colors.lightgrey};
  }
`;
const InputWrapper = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + label {
    background: ${({ theme: { backgrounds } }) => backgrounds.positive};
    &:after {
      margin: 0.35rem;
      width: 1.5rem;
      height: 1.5rem;
    }
    &:active:after {
      margin: 0.35rem;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  & + label {
    &:active:after {
      margin: 0.35rem;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
