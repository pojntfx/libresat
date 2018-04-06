import React, { Component } from "react";
import { Container } from "../Container";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const ContainerDocs = () => (
  <DocsSection
    title="Container"
    id="container"
    demos={<ContainerDemo />}
    code={code}
    api={[
      {
        title: "children (optional) (node[])",
        description: "Items inside the container."
      }
    ]}
  />
);

const code = `
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
}`;

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
