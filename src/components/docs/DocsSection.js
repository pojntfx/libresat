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
        <Details open={demoOpen}>
          <Summary onClick={event => toggleDemo(event)}>Demo</Summary>
          <DemoWrapper>{demos}</DemoWrapper>
        </Details>
        <Details open={codeOpen}>
          <Summary onClick={event => toggleCode(event)}>Code</Summary>
          <CodeWrapper>
            <code>{`${code}`}</code>
          </CodeWrapper>
        </Details>
        <Details open={propsOpen}>
          <Summary onClick={event => toggleProps(event)}>Props</Summary>
          <dl>
            {api.map(({ title, description }) => (
              <Fragment key={title}>
                <DescriptionListHeader>{title}</DescriptionListHeader>
                <dd>{description}</dd>
              </Fragment>
            ))}
          </dl>
        </Details>
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
  padding: ${({ theme: { paddings } }) => paddings.default} 0;
  & > * {
    margin-bottom: ${({ theme: { paddings } }) => paddings.default};
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Details = styled.details``;

const Summary = styled.summary`
  padding: ${({ theme: { paddings } }) => paddings.expand};
  border-radius: ${({ theme: { radiuses } }) => radiuses.default};
  &:focus,
  &:active {
    background: ${({ theme: { colors } }) => colors.darkgrey}!important;
    box-shadow: ${({ theme: { shadows } }) => shadows.defaultInset};
  }
  &:not(:hover) {
    &:focus,
    &:active {
      background: ${({ theme: { backgrounds } }) =>
        backgrounds.default}!important;
    }
  }
  &:hover {
    background: ${({ theme: { colors } }) => colors.lightgrey};
  }
  &:not(:last-child) {
    margin-bottom: ${({ theme: { margins } }) => margins.expand};
  }
  transition: background
      ${({ theme: { transitions } }) => transitions.defaultDuration},
    box-shadow ${({ theme: { transitions } }) => transitions.defaultDuration};
  outline: none;
  cursor: pointer;
`;

const CodeWrapper = styled.pre`
  overflow-x: auto;
`;

const DescriptionListHeader = styled.dt`
  font-weight: bold;
`;
