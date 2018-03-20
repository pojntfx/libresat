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
    <select
      name={name}
      id={name}
      onChange={onSelect}
      value={value}
      {...otherProps}
    >
      {options}
    </select>
  </InputWrapper>
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.node).isRequired,
  value: PropTypes.string.isRequired
};

const InputWrapper = styled.div``;
