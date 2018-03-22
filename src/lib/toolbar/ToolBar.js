import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A place to put buttons that affect the whole view.
 * @param {leftItems} leftItems Items on the left side of the ToolBar
 * @param {equalItems} equalItems Equally distributed items. No leftItems/title/rightItems will be rendered if used.
 * @param {title} title Title/brand of the page
 * @param {leftItems} leftItems Items on the right side of the ToolBar
 */
export const ToolBar = ({ leftItems, equalItems, title, rightItems }) =>
  equalItems ? (
    <EqualItemList>
      {equalItems.map(equalItem =>
        equalItem.props.children.map((item, index) => (
          <EqualItem key={index}>{item}</EqualItem>
        ))
      )}
    </EqualItemList>
  ) : (
    <DividedNavWrapper>
      <LeftItemList>
        {leftItems.map(leftItem =>
          leftItem.props.children.map((item, index) => (
            <LeftItem key={index}>{item}</LeftItem>
          ))
        )}
      </LeftItemList>
      {title ? <NavTitleWrapper>{title}</NavTitleWrapper> : null}
      <RightItemList>
        {rightItems.map(rightItem =>
          rightItem.props.children.map((item, index) => (
            <RightItem key={index}>{item}</RightItem>
          ))
        )}
      </RightItemList>
    </DividedNavWrapper>
  );

const DividedNavWrapper = styled.menu`
  display: flex;
  overflow-x: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const LeftItemList = styled.menu`
  display: flex;
  padding: 0;
  margin: 0;
  padding-left: 1rem;
`;

const LeftItem = styled.div`
  margin-right: 1rem;
  list-style-type: none;
  white-space: nowrap;
  &:last-child {
    margin-right: 0;
  }
`;

// Title
const NavTitleWrapper = styled.div`
  white-space: nowrap;
  margin: 0 1rem;
`;

// Equal items
const EqualItemList = styled.menu`
  display: flex;
  overflow-x: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const EqualItem = styled.li`
  margin-right: 1rem;
  list-style-type: none;
  white-space: nowrap;
  &:first-child {
    padding-left: 1rem;
  }
  &:last-child {
    margin-right: 0;
    padding-right: 1rem;
  }
`;

// Right items

const RightItemList = styled.menu`
  display: flex;
  padding: 0;
  margin: 0;
  padding-right: 1rem;
`;

const RightItem = styled.li`
  margin-right: 1rem;
  list-style-type: none;
  white-space: nowrap;
  &:last-child {
    margin-right: 0;
  }
`;

ToolBar.propTypes = {
  leftItems: PropTypes.arrayOf(PropTypes.node),
  equalItems: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  rightItems: PropTypes.arrayOf(PropTypes.node)
};
