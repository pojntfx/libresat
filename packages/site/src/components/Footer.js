import React from "react";
import { Segment, Grid, Modal, Button } from "semantic-ui-react";
import { StaticQuery, graphql } from "gatsby";
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

const LicenseBadgeImg = styled.img`
  padding-bottom: 1em;
`;

const LicenseBadge = ({ src, alt, href, ...otherProps }) => (
  <a href={href}>
    <LicenseBadgeImg src={src} alt={alt} {...otherProps} />
  </a>
);

const LicenseInfo = ({
  spdxLicenseIdentifier,
  product,
  copyrightHolder,
  licenseText,
  timeSpan,
  badge,
  moreInfo
}) => (
  <Modal.Content>
    <LicenseBadge src={badge.src} alt={badge.alt} href={moreInfo.link} />
    <p>
      {product} &copy; {timeSpan} {copyrightHolder}
    </p>
    <span>SPDX-License-Identifier: {spdxLicenseIdentifier}</span>
    <br />
    <p>{licenseText}</p>
    <p>
      Find out more about this license over at{" "}
      <a href={moreInfo.link}>{moreInfo.text}</a>.
    </p>
  </Modal.Content>
);

const FooterContent = ({ licenses: { media }, imprint }) => (
  <FooterWrapper>
    <Grid stackable columns={2}>
      <FooterSection width={4}>
        <span>
          &copy; {media.timeSpan} {media.copyrightHolder}
        </span>
      </FooterSection>
      <FooterSection width={12}>
        <Grid stackable columns={3}>
          <Grid.Column>
            <Modal
              trigger={
                <MetaButton fluid icon="images" content="Media License" />
              }
              closeIcon
            >
              <Modal.Header>Media License</Modal.Header>
              <LicenseInfo
                spdxLicenseIdentifier={media.spdxLicenseIdentifier}
                product={media.product}
                copyrightHolder={media.copyrightHolder}
                licenseText={media.licenseText}
                timeSpan={media.timeSpan}
                badge={media.badge}
                moreInfo={media.moreInfo}
              />
            </Modal>
          </Grid.Column>
          <Grid.Column>
            <Modal
              trigger={<MetaButton fluid icon="code" content="Code License" />}
              closeIcon
            >
              <Modal.Header>Code License</Modal.Header>
              asdf
            </Modal>
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

export const FooterView = ({ data, ...otherProps }) => (
  <FooterContent licenses={data.siteYaml.licenses} {...otherProps} />
);

export const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        siteYaml {
          licenses {
            media {
              spdxLicenseIdentifier
              product
              copyrightHolder
              licenseText
              timeSpan
              badge {
                alt
                src
              }
              moreInfo {
                text
                link
              }
            }
          }
        }
      }
    `}
    render={data => <FooterView data={data} />}
  />
);
