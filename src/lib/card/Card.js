import React from "react";

// Styled components
import styled from "styled-components";

// Styling constants
import { borderRadius, light } from "../constants";

// PropTypes
import { subComponent } from "../propTypes";

// Components
import Header from "./CardHeader";
import Body from "./CardBody";
import Footer from "./CardFooter";

export const Card = styled(({ header, body, footer, className }) => (
  <div className={className}>
    {header ? <Header>{header}</Header> : null}
    {body ? <Body>{body}</Body> : null}
    {footer ? <Footer>{footer}</Footer> : null}
  </div>
))`
  background: ${light};
  border-radius: ${borderRadius};
`;

Card.propTypes = {
  header: subComponent,
  body: subComponent,
  footer: subComponent
};
