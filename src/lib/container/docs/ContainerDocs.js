import React, { Component } from "react";
import { Container } from "../Container";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const ContainerDocs = () => (
  <DocsSection
    title="Container"
    id="container"
    code={code}
    scope={scope}
    api={[
      {
        title: "children (node[])",
        description: "Items inside the container."
      },
      {
        title: "...otherProps",
        description: "Other props that should be passed to the container."
      }
    ]}
  />
);

const scope = { Container, Component };

const code = `class ContainerDemo extends Component {
  render() {
    return (
      <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          quas assumenda inventore ex porro nemo, commodi earum aperiam,
          exercitationem corporis, eius molestias impedit! Eaque minus labore
          consequuntur omnis perferendis, minima nobis nihil ullam, dolorum ad
          deserunt atque veritatis impedit neque voluptatem hic corrupti!
          Corporis aliquam porro officia ut consequuntur eaque!
        </p>
      </Container>
    );
  }
}`;

// eslint-disable-next-line no-unused-vars
class ContainerDemo extends Component {
  render() {
    return (
      <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          quas assumenda inventore ex porro nemo, commodi earum aperiam,
          exercitationem corporis, eius molestias impedit! Eaque minus labore
          consequuntur omnis perferendis, minima nobis nihil ullam, dolorum ad
          deserunt atque veritatis impedit neque voluptatem hic corrupti!
          Corporis aliquam porro officia ut consequuntur eaque!
        </p>
      </Container>
    );
  }
}
