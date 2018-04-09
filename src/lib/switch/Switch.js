import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A switch (styled HTML5 checkbox).
 * @param {on} on Whether the switch is on or off
 * @param {label} label A description of what the switch toggles
 * @param {name} name Unique identifier
 * @param {onClick} onClick Event handler (gets fired when the user clicks the switch)
 * @param {...otherProps} ...otherProps Other (HTML5) props that should be passed to the switch
 */
export const Switch = ({ on, label, name, onClick, ...otherProps }) => (
  <SwitchWrapper>
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
  </SwitchWrapper>
);

Switch.propTypes = {
  on: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const SwitchWrapper = styled.div`
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
  width: 4rem;
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
    &: after {
      background: ${({ theme: { colors } }) => colors.lightgrey};
    }
  }
  input:disabled ~ & {
    background: ${({ theme: { colors } }) => colors.lightgrey};
  }
`;
const InputWrapper = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + label {
    background: ${({ theme: { backgrounds } }) => backgrounds.positive};
    &:active:after {
      width: 2.5rem;
    }
  }
  & + label {
    &:active:after {
      width: 2.5rem;
    }
  }
  &:checked + label:after {
    left: calc(100% - 0.2rem);
    transform: translateX(-100%);
  }
`;
