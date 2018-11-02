import styled from "react-emotion";

const DraggableGridLayoutItem = styled("div")`
  height: 100%;
  width: 100%;
  /* Accomodate for react-grid-layout structure */
  & > div {
    height: 100%;
    width: 100%;
  }
`;

export { DraggableGridLayoutItem };
