import * as React from "react";
import { IShellProps } from "../types";
import { ShortcutModal } from "./ShortcutModal/ShortcutModal";
import { Head } from "./Head";
import { Navbar } from "./Navbar/Navbar";
import { Container } from "./Container";
import { Footer } from "./Footer/Footer";
import { injectGlobal } from "emotion";
import { Segment } from "semantic-ui-react";

const Shell = ({
  head,
  navbar,
  footer,
  shortcuts,
  background,
  children,
  linkComponent,
  segment,
  noContainer
}: IShellProps) => (
  <ShortcutModal {...shortcuts}>
    <>
      {injectGlobal`
        body {
          background: url(${background}) no-repeat center center fixed !important;
          background-size: cover !important;
        }
      `}
      <Head {...head} />
      <Navbar linkComponent={linkComponent} {...navbar} />
      {noContainer ? (
        <>
          {segment ? <Segment>{children}</Segment> : children}
          <Footer {...footer} />
        </>
      ) : (
        <Container>
          {segment ? <Segment>{children}</Segment> : children}
          <Footer {...footer} />
        </Container>
      )}
    </>
  </ShortcutModal>
);

export { Shell };
