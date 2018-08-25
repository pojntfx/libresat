import { Header } from "semantic-ui-react";

import styled from "styled-components";

export const PageHeader = styled(Header).attrs({
  inverted: true,
  textAlign: "center"
})`
  padding-top: 4em !important;
  padding-bottom: 4em !important;
`;
