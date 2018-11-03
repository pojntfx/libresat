import styled from "react-emotion";
import { WidthProvider, Responsive } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DraggableGridLayoutWrapper = styled(ResponsiveReactGridLayout)`
  /* This will be black for now */
  & > .react-grid-placeholder {
    background: #2185d0 !important;
  }
  margin-bottom: 1em;
  margin-top: -1em;
`;

export { DraggableGridLayoutWrapper };
