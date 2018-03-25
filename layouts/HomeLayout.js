import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";
import styled from "styled-components";

export default ({ children }) => (
  <Fragment>
    <NavigationWrapper>
      <MainNavigation />
    </NavigationWrapper>
    <div className="container pt-2">{children}</div>
  </Fragment>
);

const NavigationWrapper = styled.header`
  position: sticky;
  top: 0;
`;
