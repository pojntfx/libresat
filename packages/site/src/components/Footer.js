import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Footer as FooterTemplate } from "@libresat/frontend-components";

export const FooterView = ({ data, ...otherProps }) => (
  <FooterTemplate
    socialLinks={data.siteYaml.socialLinks}
    legal={data.siteYaml.legal}
    {...otherProps}
  />
);

export const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        siteYaml {
          socialLinks {
            title
            img
            link
            help {
              title
              text
              docsLink
            }
          }
          legal {
            global {
              product
              timeSpan
              holder
              help {
                title
                text
                docsLink
                command
              }
            }
            licenses {
              product
              type
              icon
              timeSpan
              holder
              spdxLicenseIdentifier
              text
              badge {
                img
                title
              }
              more {
                link
                title
              }
              help {
                title
                text
                command
                docsLink
              }
            }
          }
        }
      }
    `}
    render={data => <FooterView data={data} />}
  />
);
