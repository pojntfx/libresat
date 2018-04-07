import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

// Style constants
import {
  backgrounds,
  colors,
  paddings,
  radiuses,
  shadows,
  transitions
} from "../constants";

/**
 * A select ("dropdown")
 * @param {name} name Unique identifier
 * @param {label} label A description of the selection is being used for
 * @param {onSelect} onSelect Event handler (gets fired when an option has been selected)
 * @param {options} options The options that may be selected
 * @param {value} value The currently selected option
 * @param {...otherProps} ...otherProps Other (HTML5) props that should be passed to the select
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
  justify-content: space-around;
  align-items: center;
`;

const SelectWrapper = styled.select`
  margin-left: auto;
  white-space: nowrap;
  cursor: pointer;
  border: 0;
  outline: 0;
  color: ${colors.buttons.default};
  background: ${backgrounds.default};
  border-radius: ${radiuses.default};
  padding: ${paddings.select};
  &:focus {
    background: ${colors.darkgrey}!important;
    box-shadow: ${shadows.defaultInset};
  }
  &:not(:hover) {
    &:focus {
      background: ${backgrounds.default}!important;
    }
  }
  &:hover {
    background: ${colors.lightgrey};
  }
  transition: background ${transitions.defaultDuration};
`;
