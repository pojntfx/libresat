import "../styles/common.scss";
import { Fragment } from "react";
import { MainHeader } from "../components/global/MainHeader";
import { CommonNavigation } from "../components/global/CommonNavigation";

export const LightLayout = ({ title, children }) => (
  <Fragment>
    <MainHeader>
      <CommonNavigation />
      <h1>{title}</h1>
    </MainHeader>
    {children}
  </Fragment>
);
