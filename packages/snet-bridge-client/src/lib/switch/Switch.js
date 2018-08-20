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
 * @param {...otherProps} ...otherProps Other props that should be passed to the switch
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
  margin-right: ${({ theme: { margins: { switches } } }) => switches};
`;
const Toggle = styled.label`
  background: ${({ theme: { backgrounds: { bars } } }) => bars.default};
  border-radius: ${({ theme: { radiuses: { switches } } }) => switches};
  transition: background-color
      ${({ theme: { transitions: { switches } } }) => switches},
    box-shadow ${({ theme: { transitions: { switches } } }) => switches};
  width: 4rem;
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
  &:checked + label {
    background: ${({ theme: { colors: { positive } } }) => positive};
    &:active:after {
      width: 2.25rem;
    }
  }
  & + label {
    &:active:after {
      width: 2.25rem;
    }
  }
  &:checked + label:after {
    left: calc(100% - 0.2rem);
    transform: translateX(-100%);
  }
`;
