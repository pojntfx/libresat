import styled from "react-emotion";

const ProjectListWrapper = styled("div")`
  display: flex;
  align-items: center;
  overflow-x: auto;
  &::after {
    content: "";
    padding: 0.1em;
  }
`;

export { ProjectListWrapper };
