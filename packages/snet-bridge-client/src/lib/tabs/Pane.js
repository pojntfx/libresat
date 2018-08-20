import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A tab pane.
 * @param {children} children Pane content
 * @param {active} active Whether the pane is rendered or not
 */
export const Pane = ({ children, active }) =>
  active ? <PaneWrapper>{children}</PaneWrapper> : null;

Pane.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  active: PropTypes.bool.isRequired
};

const PaneWrapper = styled.div``;
