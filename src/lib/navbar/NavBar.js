import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 *
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
  display: flex;
  overflow-x: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

// Left items
const LeftNavWrapper = styled.nav`
  display: flex;
  padding: 0 1rem;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
`;

const NavTitleWrapper = styled.div`
  white-space: nowrap;
  margin: 0;
  margin-right: 1rem;
`;

const LeftLinkList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

const LeftLink = styled.li`
  margin-right: 1rem;
  list-style-type: none;
  white-space: nowrap;
  &:last-child {
    margin-right: 0;
  }
`;

// Right items
const RightItemList = styled.ul`
  display: flex;
  padding: 0;
  padding-right: 1rem;
  margin: 0;
`;

const RightItem = styled.li`
  margin-right: 1rem;
  list-style-type: none;
  white-space: nowrap;
  &:last-child {
    margin-right: 0;
  }
`;

NavBar.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  links: PropTypes.arrayOf(PropTypes.node).isRequired,
  items: PropTypes.arrayOf(PropTypes.node).isRequired
};
