import { Header } from "semantic-ui-react";
import React from "react";

import styled from "react-emotion";

const PageHeaderTemplate = styled(Header)`
  padding-top: 4em !important;
  padding-bottom: 4em !important;
`;

export const PageHeader = props => (
  <PageHeaderTemplate inverted textAlign="center" {...props} />
);
