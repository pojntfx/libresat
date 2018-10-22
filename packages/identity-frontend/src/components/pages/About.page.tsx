import * as React from "react";
import { DefaultLayout } from "../layouts";
import { navbarData, footerData } from "../../data";
import Readme from "../../../README.md";
import { IPage } from "../../types";
import { INavbarProps, IFooterProps } from "@libresat/frontend-components";

const AboutPage = (props: IPage) => (
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
