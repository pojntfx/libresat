import * as React from "react";
import { DefaultLayout } from "../layouts";
import { navbarData, footerData } from "../../data";
import { IFooterProps, IHomePage, INavbarProps } from "../../types";
import Readme from "../../../README.md";

const AboutPage = (props: IHomePage) => (
  <DefaultLayout
    navbar={navbarData as INavbarProps}
    footer={footerData as IFooterProps}
    segment
    {...props}
  >
    <Readme />
  </DefaultLayout>
);

export { AboutPage };
