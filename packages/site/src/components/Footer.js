import React from "react";
import { Segment, Grid, Modal, Button } from "semantic-ui-react";
import styled from "styled-components";

const FooterWrapper = styled(Segment)`
  margin-top: 1em !important;
  margin-bottom: 1em !important;
`;

const FooterSection = styled(Grid.Column)`
  display: flex !important;
  align-items: center;
  justify-content: start;
  &:last-child {
    justify-content: end;
  }
  @media (max-width: 767px) {
    justify-content: start !important;
  }
`;

const MetaButton = styled(Button)`
  white-space: nowrap;
`;

const FooterContent = ({ licenses, imprint }) => (
  <FooterWrapper>
    <Grid stackable columns={2}>
      <FooterSection width={4}>
        <span>
          &copy; {licenses.media.year} {licenses.media.holder}
        </span>
      </FooterSection>
      <FooterSection width={12}>
        <Grid stackable columns={3}>
          <Grid.Column>
            <Modal
              trigger={
                <MetaButton fluid icon="images" content="Media License" />
              }
              header="Media License"
              content="Text Here"
              closeIcon
            />
          </Grid.Column>
          <Grid.Column>
            <Modal
              trigger={<MetaButton fluid icon="code" content="Code License" />}
              header="Code License"
              content="Text Here"
              closeIcon
            />
          </Grid.Column>
          <Grid.Column>
            <Modal
              trigger={<MetaButton fluid icon="legal" content="Imprint" />}
              header="Imprint"
              content="Text Here"
              closeIcon
            />
          </Grid.Column>
        </Grid>
      </FooterSection>
    </Grid>
  </FooterWrapper>
);

const footerConfig = {
  licenses: {
    media: {
      spdxLicenseIdentifier: "CC-BY-SA-4.0",
      badgeUrl: "https://licensebuttons.net/l/by-sa/4.0/88x31.png",
      product: "LibreSat Website",
      holder: "Felicitas Pojtinger",
      year: "2018"
    }
  }
};

export const Footer = props => (
  <FooterContent licenses={footerConfig.licenses} {...props} />
);
