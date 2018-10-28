import * as React from "react";
import { IHeadProps } from "../types";
import Helmet from "react-helmet";

const Head = ({
  title,
  description,
  author,
  keywords,
  favicon,
  siteTitle,
  themeColor,
  lang,
  ...otherProps
}: IHeadProps) => (
  <Helmet {...otherProps}>
    {lang ? <html lang={lang} /> : <html lang="en" />}
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    {themeColor ? (
      <meta name="theme-color" content={themeColor} />
    ) : (
      <meta name="theme-color" content="#000000" />
    )}
    {description && <meta name="description" content={description} />}
    {keywords && (
      <meta
        name="keywords"
        content={keywords.slice(0, -1).join(",") + ", " + keywords.slice(-1)}
      />
    )}
    {author ? (
      <meta name="author" content={author} />
    ) : (
      <meta
        name="author"
        content="Felicitas Pojtinger <felicitas@pojtinger.com> @pojntfx"
      />
    )}
    {favicon ? (
      <link rel="icon" href={favicon} />
    ) : (
      <link rel="icon" href="/favicon.ico" />
    )}
    <title>
      {title} | {siteTitle ? siteTitle : "LibreSat"}
    </title>
  </Helmet>
);

export { Head };
