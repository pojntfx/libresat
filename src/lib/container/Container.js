import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A Container. Limits the maximum width of it's children.
 * @param {children} children Items inside the container
 */
export const Container = ({ children }) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);

const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 1600px;
`;

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired,
    PropTypes.arrayOf(PropTypes.node).isRequired
  ])
};
