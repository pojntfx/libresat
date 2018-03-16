import React from "react";

// Styled components
import styled from "styled-components";

// Style constants
import {
  light,
  navbarInnerPadding,
  navigationSpacerPadding,
  navbarZIndex
} from "../constants";

// PropTypes
import PropTypes from "prop-types";
import { subComponent } from "../propTypes";

export const Navigation = styled(({ title, leftMenu, rightMenu, sticky }) => (
  <NavigationWrapper sticky={sticky}>
    {title || leftMenu ? (
      <LeftWrapper>
        {title ? <TitleWrapper>{title}</TitleWrapper> : null}
        {leftMenu ? <LeftMenuWrapper>{leftMenu}</LeftMenuWrapper> : null}
      </LeftWrapper>
    ) : null}
    {rightMenu ? (
      <RightWrapper title={title} leftMenu={leftMenu}>
        {rightMenu}
      </RightWrapper>
    ) : null}
  </NavigationWrapper>
))``;

Navigation.propTypes = {
  title: subComponent,
  leftMenu: subComponent,
  rightMenu: subComponent,
  sticky: PropTypes.bool
};

// Main wrapper
const NavigationWrapper = styled.nav`
  background: ${light};
  padding: ${navbarInnerPadding};
  overflow-x: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  ${props =>
    props.sticky
      ? `position: sticky; top: 0; z-index: ${navbarZIndex};`
      : null};
`;

// Left wrapper
const LeftWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
  padding-left: ${navigationSpacerPadding};
  padding-right: ${navigationSpacerPadding};
`;

// Title wrapper
const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding-right: ${navigationSpacerPadding};
`;

// Left menu wrapper
const LeftMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
`;

// Right wrapper
const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  white-space: nowrap;
  margin-left: auto;
  ${props =>
    props.title || props.leftMenu
      ? null
      : `padding-left: ${navigationSpacerPadding};`}
  padding-right: ${navigationSpacerPadding};
`;
