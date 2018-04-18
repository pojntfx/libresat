import React, { Component, Fragment } from "react";

// PropTypes
import PropTypes from "prop-types";

// Styled components
import styled from "styled-components";

// Code highlighting
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import "../../assets/code-highlighting.css";

// Components
import { Expand } from "../../lib/framework";

export class DocsSection extends Component {
  state = {
    demoOpen: true,
    codeOpen: false,
    propsOpen: false
  };

  // This is repetetive for now, but there will be features that require this
  // kind of control in the docs in the future (saving live code editing changes)
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
    const { title, id, code, scope, api } = this.props;
    const { demoOpen, codeOpen, propsOpen } = this.state;
    const { toggleDemo, toggleCode, toggleProps } = this;

    return (
      <section id={id}>
        <LiveProvider
          code={code}
          scope={scope}
          noInline={false}
          mountStylesheet={false}
        >
          <h2>{title}</h2>
          <Expand
            open={demoOpen}
            onClick={event => toggleDemo(event)}
            summary="Demo"
          >
            <LivePreview />
          </Expand>
          <Expand
            open={codeOpen}
            onClick={event => toggleCode(event)}
            summary="Code"
          >
            <ErrorDisplay />
            <CodeEditor />
          </Expand>
          <Expand
            open={propsOpen}
            onClick={event => toggleProps(event)}
            summary="Props"
          >
            <DescriptionList>
              {api.map(({ title, description }) => (
                <Fragment key={title}>
                  <DescriptionListHeader>{title}</DescriptionListHeader>
                  <dd>{description}</dd>
                </Fragment>
              ))}
            </DescriptionList>
          </Expand>
        </LiveProvider>
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
  code: PropTypes.string.isRequired,
  scope: PropTypes.any,
  api: PropTypes.arrayOf(PropTypes.shape(apiShape)).isRequired
};

const ErrorDisplay = styled(LiveError)`
  color: ${({
    theme: {
      colors: { negative }
    }
  }) => negative};
`;

const CodeEditor = styled(LiveEditor)`
  overflow-x: auto;
  margin: 0;
  padding: ${({
    theme: {
      margins: { textAreas }
    }
  }) => textAreas};
  border-radius: ${({
    theme: {
      radiuses: { textAreas }
    }
  }) => textAreas};
  border: 1px solid
    ${({
      theme: {
        colors: { lightgrey }
      }
    }) => lightgrey};
  transition: background-color
      ${({
        theme: {
          transitions: { textAreas }
        }
      }) => textAreas},
    box-shadow
      ${({
        theme: {
          transitions: { textAreas }
        }
      }) => textAreas};
  resize: vertical;
  flex-grow: 1;
  outline: 0;
  &:active,
  &:focus {
    box-shadow: ${({
      theme: {
        shadows: { defaultInset }
      }
    }) => defaultInset};
    background: ${({
      theme: {
        backgrounds: {
          textAreas: { active }
        }
      }
    }) => active} !important;
  }
  &:not(:hover) {
    &:active,
    &:focus {
      background: ${({
        theme: {
          backgrounds: {
            textAreas: { active }
          }
        }
      }) => active} !important;
    }
  }
  &:hover {
    background: ${({
      theme: {
        backgrounds: {
          textAreas: { hover }
        }
      }
    }) => hover};
  }
  &:disabled {
    background: ${({
      theme: {
        backgrounds: { bars }
      }
    }) => bars.default};
  }
`;

const DescriptionList = styled.dl`
  margin: 0;
`;

const DescriptionListHeader = styled.dt`
  font-weight: bold;
`;
