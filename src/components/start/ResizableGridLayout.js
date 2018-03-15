import React, { Component } from "react";

// Grid Layout
import { WidthProvider, Responsive } from "react-grid-layout";

// PropTypes
import PropTypes from "prop-types";

// CSS for Grid Layout
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

// Responsive Grid Layout
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class ResizableGridLayout extends Component {
  render() {
    const { onLayoutChange, layouts } = this.props;

    return (
      <ResponsiveReactGridLayout
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        layouts={layouts}
        onLayoutChange={onLayoutChange}
      >
        {/* Render all the child components inside divs */}
        {this.props.children.map(
          (child, index) =>
            child.props["data-grid"] ? (
              // If a child component uses a custom data-grid (i.e. the navbar) then
              // render a div with it inside
              <div key={index} {...child.props}>
                {child}
              </div>
            ) : (
              <div
                key={index}
                data-grid={{ w: 2, h: 6, x: 0, y: 0, minW: 2, minH: 6 }}
              >
                {child}
              </div>
            )
        )}
      </ResponsiveReactGridLayout>
    );
  }
}

ResizableGridLayout.propTypes = {
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
