import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A list of information or data.
 * @param {title} title Title of the List
 * @param {items} items Items in the List
 */
export const List = ({ title, items }) => (
  <ListWrapper>
    <ListTitleWrapper>{title}</ListTitleWrapper>
    <ListItemWrapper>
      {items.map(link =>
        link.props.children.map((linkItem, index) => (
          <ListItem key={index}>{linkItem}</ListItem>
        ))
      )}
    </ListItemWrapper>
  </ListWrapper>
);

const ListTitleWrapper = styled.div`
  font-weight: bold;
`;

const ListWrapper = styled.div``;

const ListItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: ${({ theme: { paddings } }) => paddings.default} 0;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.lightgrey};
  list-style-type: none;
  white-space: nowrap;
  overflow-x: auto;
  &:last-child {
    margin-bottom: 0;
    border-bottom: 0;
  }
`;

List.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.node).isRequired
};
