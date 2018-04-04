import "../styles/common.scss";
import { DocsWrapper } from "../components/docs/DocsWrapper";
import { DocsSideBar } from "../components/docs/DocsSideBar";

export const DocsLayout = ({ children }) => (
  <DocsWrapper sidebar={<DocsSideBar />}>{children}</DocsWrapper>
);
