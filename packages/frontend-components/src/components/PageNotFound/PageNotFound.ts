import { PageNotFoundWrapper } from "./PageNotFoundWrapper";
import styled from "react-emotion";

const PageNotFound = styled(PageNotFoundWrapper)`
  padding: 1rem;
  min-height: calc(100vh - 20rem);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export { PageNotFound };
