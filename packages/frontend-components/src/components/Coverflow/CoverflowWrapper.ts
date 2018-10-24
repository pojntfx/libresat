import styled from "react-emotion";
import * as Coverflow from "reactjs-coverflow";

const CoverflowWrapper = styled(Coverflow as React.ComponentClass<
  ICoverflowProps
>)`
  margin-top: 1em;
  margin-bottom: 1em;
  background: transparent;
`;

export { CoverflowWrapper };
