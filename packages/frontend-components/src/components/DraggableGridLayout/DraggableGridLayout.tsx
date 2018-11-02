import * as React from "react";
import { IDraggableGridLayoutProps } from "../../types";
import { DraggableGridLayoutView } from "./DraggableGridLayoutView";

const DraggableGridLayout = ({
  storageId,
  disabled,
  ...otherProps
}: IDraggableGridLayoutProps) => (
  <DraggableGridLayoutView
    layouts={
      JSON.parse((window &&
        window.localStorage.getItem(storageId)) as string) || {}
    }
    onLayoutChange={(_, layouts) => {
      !disabled &&
        window &&
        window.localStorage.setItem(storageId, JSON.stringify(layouts));
    }}
    isDraggable={!disabled}
    isRearrangeable={!disabled}
    isResizable={!disabled}
    {...otherProps}
  />
);

export { DraggableGridLayout };
