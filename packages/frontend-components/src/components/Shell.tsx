import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { IShellProps, IFooterProps } from "../types";
import { ShortcutModal } from "./ShortcutModal/ShortcutModal";
import { Head } from "./Head";
import { Navbar } from "./Navbar/Navbar";
import { Container } from "./Container";
import { Footer } from "./Footer/Footer";
import { injectGlobal } from "emotion";
import { Segment } from "semantic-ui-react";
import { NoScript } from "./NoScript/NoScript";

const Shell = ({ shortcuts, ...otherProps }: IShellProps) =>
  shortcuts ? (
    <ShortcutModal {...shortcuts}>
      <InnerShell shortcuts={shortcuts} {...otherProps} />
    </ShortcutModal>
  ) : (
    <InnerShell {...otherProps} />
  );

const InnerShell = ({
  background,
  children,
  linkComponent,
  segment,
  noContainer,
  head,
  navbar,
  footer,
  noScript,
  shortcuts
}: IShellProps) => (
  <>
    {injectGlobal`
  body {
    background: url(${background}) no-repeat center center fixed !important;
    background-size: cover !important;
  }
`}
    <NoScript {...noScript} />
    {head && <Head {...head} />}
    <Navbar linkComponent={linkComponent} {...navbar} />
    {noContainer ? (
      <>
        {segment ? <Segment>{children}</Segment> : children}
        <Footer
          {...footer}
          shortcuts={
            footer.shortcutTrigger &&
            ((Object.assign(
              { shortcutTrigger: footer.shortcutTrigger },
              shortcuts
            ) as unknown) as IFooterProps["shortcuts"])
          }
        />
      </>
    ) : (
      <Container>
        {segment ? <Segment>{children}</Segment> : children}
        <Footer
          {...footer}
          shortcuts={
            footer.shortcutTrigger &&
            ((Object.assign(
              { shortcutTrigger: footer.shortcutTrigger },
              { shortcuts }
            ) as unknown) as IFooterProps["shortcuts"])
          }
        />
      </Container>
    )}
  </>
);

export { Shell };
