import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A collapsible place for detailed content.
 * @param {open} open Whether the Expand is open or closed
 * @param {onClick} onClick Event handler (gets fired when the Expand has been clicked)
 * @param {summary} summary Description of what's inside the Expand
 * @param {children} children Items in the Expand
 * @param {...otherProps} ...otherProps Other props that should be passed to the Expand
 */
export const Expand = ({ open, onClick, summary, children, ...otherProps }) => (
  <Details open={open} {...otherProps}>
    <Summary onClick={onClick}>{summary}</Summary>
    <DetailsBody>{children}</DetailsBody>
  </Details>
);

const Summary = styled.summary`
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
      paddings: { expands }
    }
  }) => expands};
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
  white-space: nowrap;
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

const Details = styled.details`
  &:not(:last-child) > ${Summary} {
    margin-bottom: ${({
      theme: {
        margins: { expands }
      }
    }) => expands};
  }
`;

const DetailsBody = styled.div`
  padding: ${({
    theme: {
      paddings: { expandsBody }
    }
  }) => expandsBody};
  & > * {
    margin-bottom: ${({
      theme: {
        margins: { expands }
      }
    }) => expands};
  }
`;

Expand.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  summary: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};
