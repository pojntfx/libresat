import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import styled from "styled-components";

const FooterWrapper = styled(Segment)`
  margin-top: 1em !important;
  margin-bottom: 1em !important;
`;

const FooterContent = ({ licenses, imprint }) => (
  <FooterWrapper>
    <Grid stackable colums={2}>
      <Grid.Column>
        <span>
          &copy; {licenses.media.year} {licenses.media.holder}
        </span>
      </Grid.Column>
    </Grid>
  </FooterWrapper>
);

const config = {
  licenses: {
    media: {
      spdxLicenseIdentifier: "CC-BY-SA-4.0",
      badgeUrl: "https://licensebuttons.net/l/by-sa/4.0/88x31.png",
      product: "LibreSat Website",
      holder: "Felix Pojtinger",
      year: "2018"
    }
  }
};

export const Footer = props => (
  <FooterContent licenses={config.licenses} {...props} />
);
