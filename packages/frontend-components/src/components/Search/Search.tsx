import * as React from "react";
import { Component } from "react";
import { SearchInput } from "./SearchInput";
import { Transition } from "semantic-ui-react";
import { CoverflowItem } from "../Coverflow/Coverflow";
import { search } from "@libresat/frontend-utils";
import { ISearchProps, ISearchResult } from "../../types";

class Search extends Component<ISearchProps> {
  state = {
    query: "",
    results: []
  };

  updateResults = (query: ISearchProps["query"]) => {
    this.setState({
      results: search({ source: this.props.source, query }) || []
    });
  };

  handleInput = (query: ISearchProps["query"]) => {
    this.updateResults(query);
    this.setState({ query });
  };

  render() {
    return (
      <>
        <SearchInput
          icon="search"
          placeholder={this.props.placeholder}
          fluid
          onChange={(_, { value }) => this.handleInput(value)}
          value={this.state.query}
          autoFocus
        />
        <Transition.Group animation="scale">
          {this.state.results.map(
            ({ link, imgSrc, ...otherProps }: ISearchResult, index) => (
              <CoverflowItem
                fluid
                {...otherProps}
                as={this.props.linkComponent}
                to={link}
                key={index}
                image={imgSrc}
              />
            )
          )}
        </Transition.Group>
      </>
    );
  }
}

export { Search };
