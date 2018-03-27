import { Fragment } from "react";
import { MainHeader } from "../global/MainHeader";
import { CommonNavigation } from "../global/CommonNavigation";

export const DocsWrapper = ({ sidebar, children }) => (
  <Fragment>
    <MainHeader>
      <CommonNavigation />
    </MainHeader>
    <aside>{sidebar}</aside>
    <article>
      <main>{children}</main>
    </article>
  </Fragment>
);
