import React from "react";
import { DefaultLayout } from "../layouts/default";
import { graphql } from "gatsby";

export default ({
  data: {
    dataYaml: { title }
  }
}) => (
  <DefaultLayout>
    <p>{title}</p>
  </DefaultLayout>
);

export const query = graphql`
  query SiteTitle {
    dataYaml {
      title
    }
  }
`;
