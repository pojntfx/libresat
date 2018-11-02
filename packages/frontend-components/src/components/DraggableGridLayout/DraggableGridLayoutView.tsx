import * as React from "react";
import { DraggableGridLayoutWrapper } from "./DraggableGridLayoutWrapper";
import { IDraggableGridLayoutViewProps } from "../../types";
import { DraggableGridLayoutItem } from "./DraggableGridLayoutItem";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const DraggableGridLayoutView = ({
  layouts,
  onLayoutChange,
  children,
  ...otherProps
}: IDraggableGridLayoutViewProps) => (
  <DraggableGridLayoutWrapper
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
        child.props.hasOwnProperty("data-grid") ? (
          // If a child component uses a custom data-grid then render a div with it inside
          <DraggableGridLayoutItem key={index} {...child.props}>
            {child}
          </DraggableGridLayoutItem>
        ) : (
          <DraggableGridLayoutItem
            key={index}
            data-grid={{ w: 2, h: 6, x: 0, y: 0, minW: 2, minH: 6 }}
          >
            {child}
          </DraggableGridLayoutItem>
        )
    )}
  </DraggableGridLayoutWrapper>
);

export { DraggableGridLayoutView };
