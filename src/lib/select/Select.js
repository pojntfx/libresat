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
  color: ${({ theme: { colors } }) => colors.buttons.default};
  background: ${({ theme: { backgrounds } }) => backgrounds.default};
  border-radius: ${({ theme: { radiuses } }) => radiuses.default};
  padding: ${({ theme: { paddings } }) => paddings.select};
  transition: background
      ${({ theme: { transitions } }) => transitions.defaultDuration},
    box-shadow ${({ theme: { transitions } }) => transitions.defaultDuration};
  margin-left: auto;
  white-space: nowrap;
  cursor: pointer;
  border: 0;
  outline: 0;
  &:focus,
  &:active {
    background: ${({ theme: { colors } }) => colors.darkgrey}!important;
    box-shadow: ${({ theme: { shadows } }) => shadows.defaultInset};
  }
  &:not(:hover) {
    &:focus,
    &:active {
      background: ${({ theme: { backgrounds } }) =>
        backgrounds.default}!important;
    }
  }
  &:hover {
    background: ${({ theme: { colors } }) => colors.lightgrey};
  }
`;
