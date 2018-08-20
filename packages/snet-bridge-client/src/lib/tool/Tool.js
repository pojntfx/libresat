import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A menu of components.
 * @param {children} children Components of the Tool
 * @param {equal} equal Components of the Tool are equally distributed
 * @param {fill} fill Components of the Tool fill all available space
 * @param {divided} divided Components of the Tool are distributed with maximum distance to each other
 * @param {...otherProps} ...otherProps Other props that should be passed to the Tool
 */
export const Tool = ({ children, equal, fill, divided, ...otherProps }) =>
  fill ? (
    <TabsListWrapper>
      <ToolItemList
        equal={equal}
        divided={divided}
        filled={fill}
        {...otherProps}
      >
        {children}
      </ToolItemList>
    </TabsListWrapper>
  ) : (
    <ToolItemList equal={equal} divided={divided} filled={fill} {...otherProps}>
      {children}
    </ToolItemList>
  );

const TabsListWrapper = styled.div`
  padding: 0 ${({ theme: { paddings } }) => paddings.default};
  background: ${({
    theme: {
      backgrounds: { bars }
    }
  }) => bars.default};
  /* Enable the menu to flow over the inner wrapper */
  overflow: auto;
  & > menu {
    display: inline-flex;
    overflow: visible;
  }
`;

const ToolItemList = styled.menu`
  display: flex;
  align-items: center;
  justify-content: ${({ divided }) =>
    divided ? "space-between" : "flex-start"};
  margin: 0;
  padding: 0;
  overflow-x: auto;
  /* If there are nested menus, don't overflow them - only the parent should do that. */
  & > menu {
    overflow-x: visible;
  }
  & > *:not(:last-child) {
    margin-right: ${({
      theme: {
        margins: { tool }
      }
    }) => tool};
  }
  ${({ equal }) => (equal ? "& > * { margin: 0 auto; }" : null)};
  ${({ filled }) => (filled ? "flex: auto; & > * { flex: 1; }" : null)};
`;

Tool.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  equal: PropTypes.bool,
  fill: PropTypes.bool,
  divided: PropTypes.bool
};
