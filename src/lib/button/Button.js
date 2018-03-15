import React from "react";

// Styled components
import styled from "styled-components";

// Styling constants
import {
  black,
  blackHover,
  white,
  whiteHover,
  red,
  redHover,
  orange,
  orangeHover,
  yellow,
  yellowHover,
  green,
  greenHover,
  blueTeal,
  blueTealHover,
  blue,
  blueHover,
  purple,
  purpleHover,
  pink,
  pinkHover,
  borderRadius
} from "../constants";

// PropTypes
import PropTypes from "prop-types";

// Icon subcomponent
const Icon = ({ className, icon }) => (
  <span className={`ion ${icon} ${className}`} />
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

// Actual button component
export const Button = styled((props, { className }) => (
  <button className={className} {...props} onClick={props.onClick}>
    {props.icon ? <Icon {...props} /> : null}
    {props.value}
  </button>
)).attrs({
  color: props =>
    props.primary
      ? props.color === "white" ||
        props.color === "orange" ||
        props.color === "blueTeal" ||
        props.color === "yellow"
        ? `rgb(${black})`
        : `rgb(${white})`
      : `rgb(${buttonColor(props.color)})`,
  opacity: props => (props.disabled ? "0.5" : "1"),
  background: props =>
    props.primary ? `rgb(${buttonColor(props.color)})` : "transparent",
  hoverbackground: props =>
    props.primary
      ? `rgb(${buttonColor(`${props.color}Hover`)})`
      : props.color === "white" ||
        props.color === "orange" ||
        props.color === "blueTeal" ||
        props.color === "yellow"
        ? "#9eadba"
        : "#f8f9fa"
})`
  /* Static styles */
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: ${borderRadius};
  /* Dynamic styles */
  color: ${props => props.color};
  opacity: ${props => props.opacity};
  background-color: ${props => props.background};
  &:hover,
  &:active {
    background: ${props => props.hoverbackground};
  }
`;

const buttonColor = color => {
  switch (color) {
    case "white":
      return white;
    case "whiteHover":
      return whiteHover;
    case "black":
      return black;
    case "blackHover":
      return blackHover;
    case "red":
      return red;
    case "redHover":
      return redHover;
    case "orange":
      return orange;
    case "orangeHover":
      return orangeHover;
    case "yellow":
      return yellow;
    case "yellowHover":
      return yellowHover;
    case "green":
      return green;
    case "greenHover":
      return greenHover;
    case "blueTeal":
      return blueTeal;
    case "blueTealHover":
      return blueTealHover;
    case "blue":
      return blue;
    case "blueHover":
      return blueHover;
    case "purple":
      return purple;
    case "purpleHover":
      return purpleHover;
    case "pink":
      return pink;
    case "pinkHover":
      return pinkHover;
    default:
      return blue;
  }
};

Button.propTypes = {
  color: PropTypes.oneOf([
    "black",
    "white",
    "red",
    "orange",
    "yellow",
    "green",
    "blueTeal",
    "blue",
    "purple",
    "pink"
  ]),
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func
};
