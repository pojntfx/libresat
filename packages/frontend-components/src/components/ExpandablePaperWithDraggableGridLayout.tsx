import * as React from "react";
import { Expand } from "./Expand/Expand";
import { IExpandProps, IDraggableGridLayoutProps } from "../types";
import { DraggableGridLayout } from "./DraggableGridLayout/DraggableGridLayout";
import { Paper } from "./Paper";

const ExpandablePaperWithDraggableGridLayout = ({
  children,
  storageId,
  disabled,
  title,
  ...otherProps
}: IExpandProps & IDraggableGridLayoutProps) => (
  <Paper id={title.toLowerCase()}>
    <Expand disabled={disabled} title={title} {...otherProps}>
      <DraggableGridLayout disabled={disabled} storageId={storageId}>
        {children}
      </DraggableGridLayout>
    </Expand>
  </Paper>
);

export { ExpandablePaperWithDraggableGridLayout };
