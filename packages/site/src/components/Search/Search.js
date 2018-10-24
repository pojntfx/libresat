import React, { Component } from "react";
import { Input as InputTemplate, Transition } from "semantic-ui-react";
import { search } from "../../utils/search";
import styled from "react-emotion";
import { Link } from "../Link";
import { CoverflowItem } from "@libresat/frontend-components";

const InputView = styled(InputTemplate)`
  ${props =>
    props.value.length < 1 ? "margin-bottom: 10em;" : null} & > .ui.icon.input {
    width: 100%;
  }
`;

export class SearchFilter extends Component {
  state = {
    query: "",
    results: []
  };

  updateResults = query => {
    this.setState({
      results: search({ source: this.props.source, query }) || []
    });
  };

  handleInput = query => {
    this.updateResults(query);
    this.setState({ query });
  };

  render() {
    return (
      <>
        <InputView
          icon="search"
          placeholder={this.props.placeholder}
          fluid
          onChange={(e, { value }) => this.handleInput(value)}
          value={this.state.query}
          autoFocus
        />
        <Transition.Group animation="scale">
          {this.state.results.map(({ link, imgSrc, ...props }, index) => (
            <CoverflowItem
              fluid
              {...props}
              as={Link}
              to={link}
              key={index}
              image={imgSrc}
            />
          ))}
        </Transition.Group>
      </>
    );
  }
}
