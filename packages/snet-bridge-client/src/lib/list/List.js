import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

/**
 * A list of information or data.
 * @param {title} title Title of the List
 * @param {children} children Items in the List
 * @param {...otherProps} ...otherProps Other props that should be passed to the List
 */
export const List = ({ title, children, ...otherProps }) => (
  <ListWrapper {...otherProps}>
    <ListTitleWrapper>{title}</ListTitleWrapper>
    <ListItemWrapper>
      {children.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
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
  border-bottom: 1px solid
    ${({
      theme: {
        colors: { basegrey }
      }
    }) => basegrey};
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
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};
