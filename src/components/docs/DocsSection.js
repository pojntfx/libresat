import React, { Fragment } from "react";

// PropTypes
import PropTypes from "prop-types";

// Styled components
import styled from "styled-components";

export const DocsSection = ({ title, id, demos, code, api }) => (
  <section id={id}>
    <h2>{title}</h2>
    <details open>
      <summary>Demo</summary>
      <DemoWrapper>{demos}</DemoWrapper>
    </details>
    <details>
      <summary>Code</summary>
      <CodeWrapper>
        <code>{`${code}`}</code>
      </CodeWrapper>
    </details>
    <details>
      <summary>Props</summary>
      <dl>
        {api.map(({ title, description }) => (
          <Fragment key={title}>
            <dt>{title}</dt>
            <dd>{description}</dd>
          </Fragment>
        ))}
      </dl>
    </details>
  </section>
);

const apiShape = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

DocsSection.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  demos: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  code: PropTypes.string.isRequired,
  api: PropTypes.arrayOf(PropTypes.shape(apiShape)).isRequired
};

const DemoWrapper = styled.div`
  padding: 1rem 0;
  & > * {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const CodeWrapper = styled.pre`
  overflow-x: auto;
`;
