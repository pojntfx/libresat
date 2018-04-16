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
 * @param {...otherProps} ...otherProps Other props that should be passed to the slider
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
  margin-right: ${({
    theme: {
      margins: { sliders }
    }
  }) => sliders};
`;

const InputWrapper = styled.input`
  border-radius: ${({
    theme: {
      radiuses: { sliders }
    }
  }) => sliders};
  width: 100%;
  height: 2rem;
  outline: 0;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  /* WebKit & Blink: Use custom styling */
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  &[value="0"] {
    &::-webkit-slider-thumb {
      border-color: ${({
        theme: {
          backgrounds: { bars }
        }
      }) => bars.default};
      box-shadow: none;
    }
  }
  &:disabled {
    &::-webkit-slider-runnable-track {
      background: ${({
        theme: {
          backgrounds: { bars }
        }
      }) => bars.default};
    }
  }
  &::-webkit-slider-runnable-track {
    transition: ${({
      theme: {
        transitions: { sliders }
      }
    }) => sliders};
    -webkit-tap-highlight-color: transparent;
    background: ${({
      theme: {
        backgrounds: { sliders }
      }
    }) => sliders.default};
    border-radius: ${({
      theme: {
        radiuses: { sliders }
      }
    }) => sliders};
  }
  &:focus::-webkit-slider-runnable-track,
  &:active::-webkit-slider-runnable-track {
    box-shadow: ${({
      theme: {
        shadows: { sliders }
      }
    }) => sliders};
  }
  &:disabled {
    &::-webkit-slider-thumb {
      box-shadow: calc(
          -100vw - ${({
              theme: {
                margins: { sliders }
              }
            }) => sliders}
        )
        0 0 100vw ${({ theme: { colors } }) => colors.darkgrey};
      border-color: ${({ theme: { colors } }) => colors.darkgrey};
    }
  }
  &::-webkit-slider-thumb {
    border: 0.1rem solid ${({ theme: { colors } }) => colors.primary};
    border-radius: calc(
      ${({
          theme: {
            radiuses: { sliders }
          }
        }) => sliders} - 0.025rem
    );
    background: ${({
      theme: {
        colors: { light }
      }
    }) => light};
    box-shadow: calc(
        -100vw - ${({
            theme: {
              margins: { sliders }
            }
          }) => sliders}
      )
      0 0 100vw ${({ theme: { colors } }) => colors.primary};
    transition: ${({
      theme: {
        transitions: { sliders }
      }
    }) => sliders};
    margin: 0.1rem;
    margin-left: 0;
    width: 2rem;
    height: 2rem;
    box-sizing: border-box;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    &:active,
    &:focus {
      background: ${({
        theme: {
          colors: { darkgrey }
        }
      }) => darkgrey} !important;
      width: 2.25rem;
      left: calc(100% - 0.2rem);
    }
    &:not(:hover) {
      &:active,
      &:focus {
        background: ${({
          theme: {
            colors: { white }
          }
        }) => white} !important;
      }
    }
    &:hover {
      background: ${({
        theme: {
          colors: { lightgrey }
        }
      }) => lightgrey};
    }
  }

  /* TODO: Add Firefox styles (Firefox's native style is fine for now) */
  &::-moz-range-track {
  }

  &::-moz-range-thumb {
  }
`;
