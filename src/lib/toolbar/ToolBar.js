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
        {/* If there is only one button, don't map the array */}
        {leftItems[1]
          ? leftItems.map(leftItem =>
              leftItem.props.children.map((item, index) => (
                <LeftItem key={index}>{item}</LeftItem>
              ))
            )
          : leftItems}
      </LeftItemList>
      {title ? <NavTitleWrapper>{title}</NavTitleWrapper> : null}
      <RightItemList>
        {/* If there is only one button, don't map the array */}
        {rightItems[1]
          ? rightItems.map(rightItem =>
              rightItem.props.children.map((item, index) => (
                <RightItem key={index}>{item}</RightItem>
              ))
            )
          : rightItems}
      </RightItemList>
    </DividedNavWrapper>
  );

const DividedNavWrapper = styled.menu`
  padding: ${({ theme: { paddings } }) => paddings.default} 0;
  border: 1px solid ${({ theme: { colors } }) => colors.black};
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
  margin-right: ${({ theme: { margins } }) => margins.default};
  list-style-type: none;
  white-space: nowrap;
  &:last-child {
    margin-right: 0;
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
  border: 1px solid ${({ theme: { colors } }) => colors.black};
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
  margin-right: ${({ theme: { margins } }) => margins.default};
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
