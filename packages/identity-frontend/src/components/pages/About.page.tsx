import * as React from "react";
import { navbarData, footerData } from "../../data";
import Readme from "../../../README.md";
import { IPage } from "../../types";
import {
  INavbarProps,
  IFooterProps,
  DefaultLayout
} from "@libresat/frontend-components";
import bg from "../../assets/bg.jpg";

const AboutPage = (props: IPage) => (
  <DefaultLayout
    navbar={navbarData as INavbarProps}
    footer={footerData as IFooterProps}
    bg={bg}
    segment
    {...props}
  >
    <Readme />
  </DefaultLayout>
);

export { AboutPage };
