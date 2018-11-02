import { ResponsiveProps } from "react-grid-layout";

interface IDraggableGridLayoutViewProps extends ResponsiveProps {
  children: JSX.Element[];
}

interface IDraggableGridLayoutProps extends IDraggableGridLayoutViewProps {
  storageId: string;
}

export { IDraggableGridLayoutViewProps, IDraggableGridLayoutProps };
