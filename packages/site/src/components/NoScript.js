import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Message as MessageTemplate, Container } from "semantic-ui-react";
import styled from "styled-components";

const Message = styled(MessageTemplate)`
  margin-top: 1em !important;
  margin-bottom: 1em !important;
`;

const NoScriptView = ({
  data: {
    siteYaml: { noscriptHeader, noscriptBody }
  },
  ...otherProps
}) => (
  <noscript {...otherProps}>
    <Container>
      <Message
        warning
        icon="js"
        header={noscriptHeader}
        content={noscriptBody}
      />
    </Container>
  </noscript>
);

export const NoScript = props => (
  <StaticQuery
    query={graphql`
      query NoScript {
        siteYaml {
          noscriptHeader
          noscriptBody
        }
      }
    `}
    render={data => <NoScriptView data={data} {...props} />}
  />
);
