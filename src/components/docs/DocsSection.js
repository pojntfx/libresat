import React, { Component, Fragment } from "react";

// PropTypes
import PropTypes from "prop-types";

// Styled components
import styled from "styled-components";

// Components
import { Expand } from "../../lib/framework";

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
        <Expand
          open={demoOpen}
          onClick={event => toggleDemo(event)}
          summary="Demo"
        >
          {demos}
        </Expand>
        <Expand
          open={codeOpen}
          onClick={event => toggleCode(event)}
          summary="Code"
        >
          <CodeWrapper>
            <code>{`${code}`}</code>
          </CodeWrapper>
        </Expand>
        <Expand
          open={propsOpen}
          onClick={event => toggleProps(event)}
          summary="Props"
        >
          <dl>
            {api.map(({ title, description }) => (
              <Fragment key={title}>
                <DescriptionListHeader>{title}</DescriptionListHeader>
                <dd>{description}</dd>
              </Fragment>
            ))}
          </dl>
        </Expand>
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

const CodeWrapper = styled.pre`
  overflow-x: auto;
`;

const DescriptionListHeader = styled.dt`
  font-weight: bold;
`;
