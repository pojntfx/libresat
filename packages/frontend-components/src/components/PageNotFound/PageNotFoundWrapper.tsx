import * as React from "react";
import { IPageNotFoundProps } from "../../types";
import { Card, Image, Button, Icon } from "semantic-ui-react";

// This 404 page has been adapted from @pojntfx's https://gitlab.com/irasync
const PageNotFoundWrapper = ({
  homeLink,
  image,
  linkComponent,
  headComponent,
  ...otherProps
}: IPageNotFoundProps) => (
  <div {...otherProps}>
    {headComponent("404 A Rabbit Ate This Page")}
    <Card>
      <Image src={image} centered />
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
          <Button as={linkComponent} to={homeLink} primary>
            Go to the home page
          </Button>
        </Button.Group>
      </Card.Content>
    </Card>
  </div>
);

export { PageNotFoundWrapper };
