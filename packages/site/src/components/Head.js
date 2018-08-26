import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby-link";

const Title = ({
  data: {
    siteYaml: {
      title: siteTitle,
      themeColor: siteThemeColor,
      description: siteDescription,
      keywords: siteKeywords,
      author: siteAuthor,
      favicon: siteFavicon,
      lang: siteLang
    }
  },
  title: pageTitle,
  themeColor: pageThemeColor,
  description: pageDescription,
  keywords: pageKeywords,
  author: pageAuthor,
  favicon: pageFavicon,
  lang: pageLang,
  ...otherProps
}) => (
  <Helmet {...otherProps}>
    <html lang={pageLang ? pageLang : siteLang} />
    <meta
      name="theme-color"
      content={pageThemeColor ? pageThemeColor : siteThemeColor}
    />
    <meta
      name="description"
      content={pageDescription ? pageDescription : siteDescription}
    />
    <meta
      name="keywords"
      content={pageKeywords ? pageKeywords.join(", ") : siteKeywords.join(", ")}
    />
    <meta name="author" content={pageAuthor ? pageAuthor : siteAuthor} />
    <link
      rel="icon"
      href={pageFavicon ? pageFavicon : withPrefix(siteFavicon)}
    />
    {/* TODO: Add icon and manifest */}
    <title>
      {siteTitle} | {pageTitle}
    </title>
  </Helmet>
);

export const Head = props => (
  <StaticQuery
    query={graphql`
      query SiteTitle {
        siteYaml {
          title
          themeColor
          description
          keywords
          author
          favicon
          lang
        }
      }
    `}
    render={data => <Title data={data} {...props} />}
  />
);
