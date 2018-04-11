import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A slider (HTML5 "range" input)
 * @param {value} value The slider's current value
 * @param {label} label A description of what information to enter
 * @param {name} name Unique identifier
 * @param {onChange} onChange Event handler (gets fired when content has been modified)
 * @param {...otherProps} ...otherProps Other (HTML5) props that should be passed to the slider
 */
export const Slider = ({ value, label, name, onChange, ...otherProps }) => (
  <SliderWrapper>
    <Label htmlFor={name}>{label}</Label>
    <InputWrapper
      type="range"
      name={name}
      id={name}
      onChange={onChange}
      value={value}
      {...otherProps}
    />
  </SliderWrapper>
);

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Label = styled.span`
  margin-right: ${({ theme: { margins } }) => margins.default};
`;

const InputWrapper = styled.input`
  border-radius: ${({ theme: { radiuses } }) => radiuses.default};
  width: 100%;
  height: 2.2rem;
  outline: 0;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  /* WebKit & Blink: Use custom styling */
  -webkit-appearance: none;
  &[value="0"] {
    &::-webkit-slider-thumb {
      border-color: ${({ theme: { colors } }) => colors.darkgrey};
      box-shadow: none;
    }
  }
  &:disabled {
    &::-webkit-slider-runnable-track {
      background: ${({ theme: { colors } }) => colors.lightgrey};
    }
  }
  &:disabled {
    &::-webkit-slider-thumb {
      box-shadow: calc(-100vw - ${({ theme: { margins } }) => margins.default})
        0 0 100vw ${({ theme: { colors } }) => colors.darkgrey};
      border-color: ${({ theme: { colors } }) => colors.darkgrey};
    }
  }
  &::-webkit-slider-runnable-track {
    background: ${({ theme: { colors } }) => colors.darkgrey};
  }
  &::-webkit-slider-thumb {
    border: 0.1rem solid ${({ theme: { colors } }) => colors.text.primary};
    border-radius: calc(
      ${({ theme: { radiuses } }) => radiuses.default} - 0.025rem
    );
    background: ${({ theme: { colors } }) => colors.white};
    box-shadow: calc(-100vw - ${({ theme: { margins } }) => margins.default}) 0
      0 100vw ${({ theme: { colors } }) => colors.text.primary};
    transition: ${({ theme: { transitions } }) => transitions.defaultDuration};
    margin: 0.1rem;
    margin-left: 0;
    width: 2.2rem;
    height: 2.2rem;
    box-sizing: border-box;
    -webkit-appearance: none;
    &:hover,
    &:focus {
      background: ${({ theme: { colors } }) => colors.lightgrey};
    }
    &:active,
    &:focus {
      width: 2.5rem;
      left: calc(100% - 0.2rem);
    }
  }

  /* TODO: Add Firefox styles (Firefox's native style is fine for now) */
  &::-moz-range-track {
  }

  &::-moz-range-thumb {
  }
`;
