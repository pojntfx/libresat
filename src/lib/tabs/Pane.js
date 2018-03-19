import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

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
