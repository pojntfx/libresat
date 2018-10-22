import styled from "react-emotion";

export const ProjectList = styled("div")`
  display: flex;
  align-items: center;
  overflow-x: auto;
  &::after {
    content: "";
    padding: 0.1em;
  }
`;
