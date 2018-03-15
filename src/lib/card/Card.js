import React, { Component } from "react";

// Styled components
import styled from "styled-components";

// Styling constants
import { borderRadius, cardColor } from "../constants";

// PropTypes
import { subComponent } from "../propTypes";

// Components
import Header from "./CardHeader";
import Body from "./CardBody";
import Footer from "./CardFooter";

class Card extends Component {
  render() {
    return (
      <CardWrapper>
        {this.props.header ? <Header>{this.props.header}</Header> : null}
        {this.props.body ? <Body>{this.props.body}</Body> : null}
        {this.props.footer ? <Footer>{this.props.footer}</Footer> : null}
      </CardWrapper>
    );
  }
}

Card.propTypes = {
  header: subComponent,
  body: subComponent,
  footer: subComponent
};

const CardWrapper = styled.div`
  background: ${cardColor};
  border-radius: ${borderRadius};
`;

// Exports
export default Card;
