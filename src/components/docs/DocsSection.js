import React, { Component, Fragment } from "react";

// PropTypes
import PropTypes from "prop-types";

// Styled components
import styled from "styled-components";

export class DocsSection extends Component {
  state = {
    demoOpen: true,
    codeOpen: false,
    propsOpen: false
  };

  // This is repetetive for now, but there will be features that require this
  // kind of control in the docs in the future (live code editing).
  toggleDemo = event => {
    // Don't use native open/close
    event.preventDefault();
    // Toggle it manually
    this.setState({
      demoOpen: !this.state.demoOpen
    });
  };

  toggleCode = event => {
    // Don't use native open/close
    event.preventDefault();
    // Toggle it manually
    this.setState({
      codeOpen: !this.state.codeOpen
    });
  };

  toggleProps = event => {
    // Don't use native open/close
    event.preventDefault();
    // Toggle it manually
    this.setState({
      propsOpen: !this.state.propsOpen
    });
  };

  render() {
    const { title, id, demos, code, api } = this.props;
    const { demoOpen, codeOpen, propsOpen } = this.state;
    const { toggleDemo, toggleCode, toggleProps } = this;

    return (
      <section id={id}>
        <h2>{title}</h2>
        <details open={demoOpen}>
          <summary onClick={event => toggleDemo(event)}>Demo</summary>
          <DemoWrapper>{demos}</DemoWrapper>
        </details>
        <details open={codeOpen}>
          <summary onClick={event => toggleCode(event)}>Code</summary>
          <CodeWrapper>
            <code>{`${code}`}</code>
          </CodeWrapper>
        </details>
        <details open={propsOpen}>
          <summary onClick={event => toggleProps(event)}>Props</summary>
          <dl>
            {api.map(({ title, description }) => (
              <Fragment key={title}>
                <DescriptionListHeader>{title}</DescriptionListHeader>
                <dd>{description}</dd>
              </Fragment>
            ))}
          </dl>
        </details>
      </section>
    );
  }
}

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

const DescriptionListHeader = styled.dt`
  font-weight: bold;
`;
