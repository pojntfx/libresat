import React from "react";
import { Button, Image, Card, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { withPrefix } from "gatsby-link";
import { Link } from "../components/Link";
import { Head } from "../components/Head.js";

// This 404 page has been adopted from @pojntfx's https://gitlab.com/irasync
const PageNotFound = ({ className }) => (
  <div className={className}>
    <Head title="404 A Rabbit Ate This Page" />
    <Card>
      <Image src={withPrefix("/img/404-rabbit.jpg")} centered />
      <Card.Content>
        <Card.Header>
          {" "}
          Nom nom nom ... whoops ... 404, this page does not exist (anymore) :(
        </Card.Header>
        <Card.Description>
          Look at the sweet little rabbit above. If he would be responsible for
          this page
          {"'"}s absence, would you do anything to him? We hope not. Now imagine
          this rabbit is us. Would you do anything to us? Please ... don
          {"'"}
          t.
        </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign="center">
        <Button.Group>
          <Button
            as="a"
            href="https://duckduckgo.com/"
            secondary
            animated="fade"
          >
            <Button.Content visible>Get help</Button.Content>
            <Button.Content hidden>
              <Icon name="help" />
            </Button.Content>
          </Button>
          <Button.Or />
          <Button as={Link} to="/" primary>
            Go to the home page
          </Button>
        </Button.Group>
      </Card.Content>
    </Card>
  </div>
);

// Center the card
export default styled(PageNotFound)`
  padding: 1rem;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
