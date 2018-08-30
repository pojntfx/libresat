import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { injectGlobal } from "styled-components";
import { withPrefix } from "gatsby-link";
import { MDXProvider } from "@mdx-js/tag";
import { Link } from "../components/Link";
import { Image } from "../components/Blog/Image";
import { NoScript } from "../components/NoScript";
import { Paper } from "../components/Paper";

injectGlobal`
  body {
    background: url("${withPrefix(
      "/img/bg.jpg"
    )}") no-repeat center center fixed;
    background-size: cover;
  }
`;

export const Base = ({ children, noContainer, ...otherProps }) => (
  <MDXProvider
    components={{
      a: ({ href, ...otherProps }) => <Link to={href} {...otherProps} />,
      img: ({ src, ...otherProps }) => (
        <Image as={Link} to={src} src={src} {...otherProps} />
      ),
      blockquote: ({ children, ...otherProps }) => (
        <Paper {...otherProps}>
          <i>{children}</i>
        </Paper>
      )
    }}
  >
    <>
      <NoScript />
      <Navbar />
      {noContainer ? (
        <>
          {children}
          <Container>
            <Footer />
          </Container>
        </>
      ) : (
        <Container {...otherProps}>
          {children}
          <Footer />
        </Container>
      )}
    </>
  </MDXProvider>
);
