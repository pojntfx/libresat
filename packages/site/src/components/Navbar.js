import React from "react";
import { Navbar as NavbarTemplate } from "@libresat/frontend-components";
import { Link } from "../components/Link";
import { graphql, StaticQuery } from "gatsby";

const NavbarView = ({ data: { navbarYaml, ...otherProps } }) => (
  <NavbarTemplate linkComponent={Link} {...navbarYaml} {...otherProps} />
);

export const Navbar = () => (
  <StaticQuery
    query={graphql`
      query NavbarQuery {
        navbarYaml {
          brand {
            title
            img
            link
            disabled
            help {
              title
              text
              command
              docsLink
            }
          }
          firstItems {
            title
            link
            icon
            disabled
            help {
              title
              text
            }
          }
          startItems {
            title
            link
            icon
            disabled
            help {
              title
              text
            }
          }
          endItems {
            title
            link
            icon
            disabled
            help {
              title
              text
            }
          }
          lastItems {
            title
            link
            icon
            disabled
            help {
              title
              text
            }
          }
        }
      }
    `}
    render={data => <NavbarView data={data} />}
  />
);
