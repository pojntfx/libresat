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
import { NavLink } from "react-router-dom";

const AboutPage = (props: IPage) => (
  <DefaultLayout
    navbar={navbarData as INavbarProps}
    footer={footerData as IFooterProps}
    bg={bg}
    linkComponent={(NavLink as unknown) as JSX.Element}
    segment
    {...props}
  >
    <Readme />
  </DefaultLayout>
);

export { AboutPage };
