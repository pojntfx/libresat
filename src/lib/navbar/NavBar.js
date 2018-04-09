import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * Main navigation at the top of the page.
 * @param {title} title Title/brand of the page
 * @param {links} links Links on the left side of the NavBar
 * @param {items} items Items on the right side of the NavBar
 */
export const NavBar = ({ title, links, items }) => (
  <NavHeaderWrapper>
    <LeftNavWrapper>
      {title ? <NavTitleWrapper>{title}</NavTitleWrapper> : null}
      <LeftLinkList>
        {links.map(link =>
          link.props.children.map((linkItem, index) => (
            <LeftLink key={index}>{linkItem}</LeftLink>
          ))
        )}
      </LeftLinkList>
    </LeftNavWrapper>
    <RightItemList>
      {items.map(item =>
        item.props.children.map((controlItem, index) => (
          <RightItem key={index}>{controlItem}</RightItem>
        ))
      )}
    </RightItemList>
  </NavHeaderWrapper>
);

const NavHeaderWrapper = styled.header`
  padding: ${({ theme: { paddings } }) => paddings.default} 0;
  background: ${({ theme: { colors } }) => colors.bargrey};
  display: flex;
  overflow-x: auto;
  justify-content: space-between;
  align-items: center;
`;

// Left items
const LeftNavWrapper = styled.nav`
  padding: 0 ${({ theme: { paddings } }) => paddings.default};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
`;

const NavTitleWrapper = styled.div`
  white-space: nowrap;
  margin: 0;
  margin-right: ${({ theme: { margins } }) => margins.default};
`;

const LeftLinkList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

const LeftLink = styled.li`
  list-style-type: none;
  white-space: nowrap;
  &:not(:last-child) {
    margin-right: ${({ theme: { margins } }) => margins.default};
  }
`;

// Right items
const RightItemList = styled.ul`
  padding: 0;
  padding-right: ${({ theme: { margins } }) => margins.default};
  display: flex;
  margin: 0;
`;

const RightItem = styled.li`
  list-style-type: none;
  white-space: nowrap;
  &:not(:last-child) {
    margin-right: ${({ theme: { margins } }) => margins.default};
  }
`;

NavBar.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  links: PropTypes.arrayOf(PropTypes.node).isRequired,
  items: PropTypes.arrayOf(PropTypes.node).isRequired
};
