import React from "react";

// PropTypes
import PropTypes from "prop-types";

// Styled components
import styled from "styled-components";

// React Grid Layout
import { WidthProvider, Responsive } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * A draggable, resizable and responsive GridLayout.
 * @param {layouts} layouts Layout of the GridLayout
 * @param {onLayoutChange} onLayoutChange Event handler (gets fired when the user moves a component of the GridLayout)
 * @param {children} children Components of the GridLayout
 * @param {...otherProps} ...otherProps Other props that should be passed to the GridLayout
 */
export const GridLayout = ({
  layouts,
  onLayoutChange,
  children,
  ...otherProps
}) => (
  <GridLayoutWrapper
    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    rowHeight={30}
    layouts={layouts}
    onLayoutChange={onLayoutChange}
    compactType="vertical"
    {...otherProps}
  >
    {/* Render all the child components inside divs */}
    {children.map(
      (child, index) =>
        child.props["data-grid"] ? (
          // If a child component uses a custom data-grid then render a div with it inside
          <GridItem key={index} {...child.props}>
            {child}
          </GridItem>
        ) : (
          <GridItem
            key={index}
            data-grid={{ w: 2, h: 6, x: 0, y: 0, minW: 2, minH: 6 }}
          >
            {child}
          </GridItem>
        )
    )}
  </GridLayoutWrapper>
);

const GridItem = styled.div`
  height: 100%;
  width: 100%;
  /* Accomodate for react-grid-layout structure */
  & > div {
    height: 100%;
    width: 100%;
  }
`;

const GridLayoutWrapper = styled(ResponsiveReactGridLayout)`
  /* This will be blue for now */
  & > .react-grid-placeholder {
    background: ${({
      theme: {
        backgrounds: { gridLayout }
      }
    }) => gridLayout.default}!important;
  }
`;

GridLayout.propTypes = {
  layouts: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired
  ]),
  onLayoutChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.arrayOf(PropTypes.node).isRequired
  ])
};
