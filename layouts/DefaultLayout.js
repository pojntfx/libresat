import { Fragment } from "react";
import { MainHeader } from "../components/global/MainHeader";
import { MainNavigation } from "../components/global/MainNavigation";
import { SubNavigation } from "../components/global/SubNavigation";

export const DefaultLayout = ({ title, sublinks, children }) => (
  <Fragment>
    <MainHeader>
      <MainNavigation
        links={["Software", "Hardware", "Network"]}
      />
      {sublinks ? <SubNavigation title={title} links={sublinks} /> : null}
    </MainHeader>
    {children}
  </Fragment>
);
