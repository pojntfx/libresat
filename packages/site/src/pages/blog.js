import React from "react";
import { Base } from "../layouts/Base";
import { Container } from "semantic-ui-react";
import { Paper } from "../components/Paper";
import { CoverflowSection } from "../components/Blog/Coverflow/CoverflowSection";
import { GallerySection } from "../components/Blog/Gallery/GallerySection";
import { BlogHeader } from "../components/Blog/Headers/Blog";
import { FeaturedHeader } from "../components/Blog/Headers/Featured";
import { LatestHeader } from "../components/Blog/Headers/Latest";
import { Head } from "../components/Head.js";

export default () => (
  <Base noContainer>
    <Head title="Blog" />
    <Container>
      <BlogHeader />
      <Paper>
        <FeaturedHeader />
      </Paper>
    </Container>
    <CoverflowSection featured />
    <Container>
      <Paper>
        <LatestHeader />
      </Paper>
      <GallerySection />
    </Container>
  </Base>
);
