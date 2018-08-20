import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A loading screen.
 * @param {...otherProps} ...otherProps Other props that should be passed to the LoadingWrapper
 */
export const Loading = ({ ...otherProps }) => (
  <LoadingWrapper {...otherProps}>Loading ...</LoadingWrapper>
);

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;

Loading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};
