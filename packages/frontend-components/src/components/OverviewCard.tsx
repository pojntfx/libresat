import * as React from "react";
import { Expand } from "./Expand/Expand";
import { IExpandProps, IDraggableGridLayoutProps } from "../types";
import { DraggableGridLayout } from "./DraggableGridLayout/DraggableGridLayout";

const OverviewCard = ({
  children,
  storageId,
  disabled,
  ...otherProps
}: IExpandProps & IDraggableGridLayoutProps) => (
  <Expand styled disabled={disabled} {...otherProps}>
    <DraggableGridLayout disabled={disabled} storageId={storageId}>
      {children}
    </DraggableGridLayout>
  </Expand>
);

export { OverviewCard };
