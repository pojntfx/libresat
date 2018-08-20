import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A Container. Limits the maximum width of it's children.
 * @param {children} children Items inside the container
 * @param {...otherProps} ...otherProps Other props that should be passed to the CheckBox
 */
export const Container = ({ children, ...otherProps }) => (
  <ContainerWrapper {...otherProps}>{children}</ContainerWrapper>
);

const ContainerWrapper = styled.div`
  padding: ${({ theme: { paddings } }) => paddings.default};
  margin: 0 auto;
  max-width: 1280px;
`;

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired,
    PropTypes.arrayOf(PropTypes.node).isRequired
  ])
};
