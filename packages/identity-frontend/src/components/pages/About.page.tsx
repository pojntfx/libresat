import * as React from "react";
import { navbarData, footerData, aboutData, shortcutsData } from "../../data";
import Readme from "../../../README.md";
import { IPage } from "../../types";
import { NavLink } from "react-router-dom";
import { Shell } from "@libresat/frontend-components/dist/components";
import { IShellProps } from "@libresat/frontend-components/dist/types";

const AboutPage = (props: IPage) => (
  <Shell
    head={aboutData.head}
    navbar={navbarData as IShellProps["navbar"]}
    footer={footerData as IShellProps["footer"]}
    shortcuts={shortcutsData}
    background={aboutData.background}
    linkComponent={(NavLink as unknown) as JSX.Element}
    segment
    {...props}
  >
    <Readme />
  </Shell>
);

export { AboutPage };
