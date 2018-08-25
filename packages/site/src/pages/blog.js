import React from "react";
import { Base } from "../layouts/Base";
import { Container, Header } from "semantic-ui-react";
import { Paper } from "../components/Paper";
import { CoverflowSection } from "../components/Blog/Coverflow/CoverflowSection";
import { GallerySection } from "../components/Blog/Gallery/GallerySection";
import { BlogHeader } from "../components/Blog/Headers/Blog";

export default () => (
  <Base noContainer>
    <Container>
      <BlogHeader />
      <Paper>
        <Header
          content="Featured Posts"
          icon="star"
          subheader={`Check out the featured, editorial posts below and get an insight into
          recent news, updates and changes.`}
        />
      </Paper>
    </Container>
    <CoverflowSection featured />
    <Container>
      <Paper>
        <Header
          content="Latest Posts"
          icon="newspaper"
          subheader={`Non-editorial, federated posts by the community and/or core devs.
          Consider contributing your own post by submitting a merge request!`}
        />
      </Paper>
      <GallerySection />
    </Container>
  </Base>
);
