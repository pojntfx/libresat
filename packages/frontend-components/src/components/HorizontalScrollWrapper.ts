import styled from "react-emotion";

const HorizontalScrollWrapper = styled("div")`
  display: flex;
  align-items: center;
  overflow-x: auto;
  padding-right: 0 !important;
  &::after {
    content: "";
    padding: 0.5em;
  }
  & > *:first-child {
    margin-left: 1em;
  }
`;

export { HorizontalScrollWrapper };
