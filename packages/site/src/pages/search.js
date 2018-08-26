import React from "react";
import { Base } from "../layouts/Base";
import { PageHeader } from "../components/Blog/Headers/PageHeader";
import { SearchSection } from "../components/Search/SearchSection";

export default () => (
  <Base>
    <PageHeader as="h1" content="Search" subheader="Filter the universe" />
    <SearchSection />
  </Base>
);
