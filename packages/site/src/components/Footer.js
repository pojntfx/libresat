import React from "react";
import { Segment, Grid, Modal, Button } from "semantic-ui-react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Link } from "../components/Link";

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
    justify-content: center !important;
  }
`;

const FooterLegalGrid = styled(Grid)`
  margin-left: auto !important;
`;

const MetaButton = styled(Button).attrs({ fluid: true })`
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

const LicenseTextCodeWrapper = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
`;

const LicenseTextCode = styled.code`
  overflow-x: auto;
`;

const LicenseText = ({ children, ...otherProps }) => (
  <LicenseTextCodeWrapper {...otherProps}>
    <LicenseTextCode>{children}</LicenseTextCode>
  </LicenseTextCodeWrapper>
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
    <LicenseText>{licenseText}</LicenseText>
    <p>
      Find out more about this license over at{" "}
      <a href={moreInfo.link}>{moreInfo.text}</a>.
    </p>
  </Modal.Content>
);

const SocialButtonTemplate = ({ src, alt, to, ...otherProps }, index) => (
  <Link to={to} key={index} {...otherProps}>
    <img src={src} alt={alt} />
  </Link>
);

const SocialButton = styled(SocialButtonTemplate)`
  display: block;
  &:not(:last-child) {
    margin-right: 1em !important;
  }
  &:first-child {
    margin-left: auto;
  }
  &:last-child {
    margin-right: auto;
  }
`;

const SocialsWrapper = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  overflow-x: auto;
`;

const Socials = ({ links, ...otherProps }) => (
  <SocialsWrapper {...otherProps}>
    {links.map(({ src, alt, to, ...rest }) => (
      <SocialButton
        src="https://img.shields.io/badge/Mastodon-%40libresat-3088D4.svg?logo=mastodon&style=social"
        alt="Mastodon"
        to="https://mastodon.cloud/@libresat"
        {...rest}
      />
    ))}
  </SocialsWrapper>
);

const links = [
  {
    alt: "Mastodon",
    src:
      "https://img.shields.io/badge/Mastodon-%40libresat-3088D4.svg?logo=mastodon&style=social",
    to: "https://mastodon.cloud/@libresat"
  }
];

const FooterContent = ({ licenses: { media, code }, imprint }) => (
  <FooterWrapper>
    <Socials links={links} />
    <Grid stackable columns={2}>
      <FooterSection width={4}>
        <span>
          &copy; {media.timeSpan} {media.copyrightHolder}
        </span>
      </FooterSection>
      <FooterSection width={12}>
        <FooterLegalGrid stackable columns={3}>
          <Grid.Column>
            <Modal
              trigger={<MetaButton icon="images" content="Media License" />}
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
              trigger={<MetaButton icon="code" content="Code License" />}
              closeIcon
            >
              <Modal.Header>Code License</Modal.Header>
              <LicenseInfo
                spdxLicenseIdentifier={code.spdxLicenseIdentifier}
                product={code.product}
                copyrightHolder={code.copyrightHolder}
                licenseText={code.licenseText}
                timeSpan={code.timeSpan}
                badge={code.badge}
                moreInfo={code.moreInfo}
              />
            </Modal>
          </Grid.Column>
          <Grid.Column>
            <MetaButton
              icon="legal"
              content="Imprint"
              as={Link}
              to={"/imprint"}
              activeClassName="active"
            />
          </Grid.Column>
        </FooterLegalGrid>
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
            code {
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
