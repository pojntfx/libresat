import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A select ("dropdown")
 * @param {name} name Unique identifier
 * @param {label} label A description of the selection is being used for
 * @param {onSelect} onSelect Event handler (gets fired when an option has been selected)
 * @param {options} options The options that may be selected
 * @param {value} value The currently selected option
 * @param {...otherProps} ...otherProps Other props that should be passed to the select
 */
export const Select = ({
  name,
  label,
  onSelect,
  options,
  value,
  ...otherProps
}) => (
  <InputWrapper>
    <label htmlFor={name}>{label}</label>
    <SelectWrapper
      name={name}
      id={name}
      onChange={onSelect}
      value={value}
      {...otherProps}
    >
      {options}
    </SelectWrapper>
  </InputWrapper>
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.node).isRequired,
  value: PropTypes.string.isRequired
};

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectWrapper = styled.select`
  color: ${({
    theme: {
      colors: { buttons }
    }
  }) => buttons.default.light.default};
  background: ${({
    theme: {
      backgrounds: { buttons }
    }
  }) => buttons.default.light.default};
  padding: ${({
    theme: {
      paddings: { select }
    }
  }) => select};
  border-radius: ${({
    theme: {
      radiuses: { buttons }
    }
  }) => buttons};
  transition: background
      ${({
        theme: {
          transitions: { buttons }
        }
      }) => buttons},
    box-shadow
      ${({
        theme: {
          transitions: { buttons }
        }
      }) => buttons};
  ${({ equal }) => (equal ? "flex: 1;" : null)} white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  border: 0;
  outline: 0;
  &:active,
  &:focus {
    color: ${({
      theme: {
        colors: { buttons }
      }
    }) => buttons.default.light.active}!important;
    background: ${({
      theme: {
        backgrounds: { buttons }
      }
    }) => buttons.default.light.active} !important;
    box-shadow: ${({
      theme: {
        shadows: { defaultInset }
      }
    }) => defaultInset};
  }
  &:not(:hover) {
    &:active,
    &:focus {
      color: ${({
        theme: {
          colors: { buttons }
        }
      }) => buttons.default.light.default}!important;
      background: ${({
        theme: {
          backgrounds: { buttons }
        }
      }) => buttons.default.light.default} !important;
      box-shadow: ${({
        theme: {
          shadows: { defaultInset }
        }
      }) => defaultInset};
    }
  }
  &:hover {
    color: ${({
      theme: {
        colors: { buttons }
      }
    }) => buttons.default.light.hover};
    background: ${({
      theme: {
        backgrounds: { buttons }
      }
    }) => buttons.default.light.hover};
  }
`;
