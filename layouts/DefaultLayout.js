import { Fragment } from "react";
import { MainHeader } from "../components/global/MainHeader";
import { CommonNavigation } from "../components/global/CommonNavigation";
import { SubNavigation } from "../components/global/SubNavigation";

export const DefaultLayout = ({ title, sublinks, children }) => (
  <Fragment>
    <MainHeader>
      <CommonNavigation />
      {sublinks ? <SubNavigation title={title} links={sublinks} /> : null}
    </MainHeader>
    {children}
  </Fragment>
);
