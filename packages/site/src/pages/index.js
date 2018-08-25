import React from "react";
import { Base } from "../layouts/Base";
import { HeroSection } from "../components/Home/HeroSection";
import { SubsystemSection } from "../components/Home/SubsystemSection";
import { HighlightedPartsSection } from "../components/Home/HighlightedPartsSection";
import { BroadcastSection } from "../components/Home/BroadcastSection";

export default () => (
  <Base>
    <HeroSection />
    <BroadcastSection />
    <SubsystemSection />
    <HighlightedPartsSection />
  </Base>
);
