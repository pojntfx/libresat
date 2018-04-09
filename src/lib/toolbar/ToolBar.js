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
        {leftItems.map((leftItem, index) => (
          <LeftItem key={index}>{leftItem}</LeftItem>
        ))}
      </LeftItemList>
      {title ? <NavTitleWrapper>{title}</NavTitleWrapper> : null}
      <RightItemList>
        {rightItems.map((rightItem, index) => (
          <RightItem key={index}>{rightItem}</RightItem>
        ))}
      </RightItemList>
    </DividedNavWrapper>
  );

const DividedNavWrapper = styled.menu`
  padding: ${({ theme: { paddings } }) => paddings.default} 0;
  background: ${({ theme: { colors } }) => colors.bargrey};
  display: flex;
  overflow-x: auto;
  justify-content: space-between;
  align-items: center;
`;

const LeftItemList = styled.menu`
  padding: 0;
  padding-left: ${({ theme: { paddings } }) => paddings.default};
  display: flex;
  margin: 0;
`;

const LeftItem = styled.div`
  list-style-type: none;
  white-space: nowrap;
  &:not(:last-child) {
    margin-right: ${({ theme: { margins } }) => margins.default};
  }
`;

// Title
const NavTitleWrapper = styled.div`
  margin: 0 ${({ theme: { margins } }) => margins.default};
  white-space: nowrap;
`;

// Equal items
const EqualItemList = styled.menu`
  padding: ${({ theme: { paddings } }) => paddings.default} 0;
  background: ${({ theme: { colors } }) => colors.bargrey};
  display: flex;
  overflow-x: auto;
  justify-content: space-between;
  align-items: center;
`;

const EqualItem = styled.li`
  margin-right: ${({ theme: { margins } }) => margins.default};
  list-style-type: none;
  white-space: nowrap;
  &:first-child {
    padding-left: ${({ theme: { paddings } }) => paddings.default};
  }
  &:last-child {
    padding-right: ${({ theme: { paddings } }) => paddings.default};
    margin-right: 0;
  }
`;

// Right items

const RightItemList = styled.menu`
  padding: 0;
  padding-right: ${({ theme: { paddings } }) => paddings.default};
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

ToolBar.propTypes = {
  leftItems: PropTypes.arrayOf(PropTypes.node),
  equalItems: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  rightItems: PropTypes.arrayOf(PropTypes.node)
};
