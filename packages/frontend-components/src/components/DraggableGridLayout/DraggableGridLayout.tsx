import * as React from "react";
import { IDraggableGridLayoutProps } from "../../types";
import { DraggableGridLayoutView } from "./DraggableGridLayoutView";

const DraggableGridLayout = ({
  storageId,
  ...otherProps
}: IDraggableGridLayoutProps) => (
  <DraggableGridLayoutView
    layouts={
      JSON.parse((window &&
        window.localStorage.getItem(storageId)) as string) || {}
    }
    onLayoutChange={(_, layouts) =>
      window && window.localStorage.setItem(storageId, JSON.stringify(layouts))
    }
    {...otherProps}
  />
);

export { DraggableGridLayout };
