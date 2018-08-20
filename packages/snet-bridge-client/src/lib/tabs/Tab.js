import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

// Components
import { Button } from "../button/Button";
import { Pane } from "./Pane";
import { Tool } from "../tool/Tool";

/**
 * A tab.
 * @param {tabBar} tabBar Whether the tab is being used in a TabBar or not
 * @param {links} links Tab titles
 * @param {panes} panes Tab content
 * @param {activePane} activePane Active pane (the one that is currently visible)
 * @param {onChange} onChange Event handler (gets fired when a tab title has been clicked)
 * @param {...otherProps} ...otherProps Other props that should be applied to the title headers
 */
export const Tab = ({
  tabBar,
  links,
  panes,
  activePane,
  onChange,
  ...otherProps
}) => (
  <TabWrapper>
    <Tool fill={tabBar}>
      {links.map((link, index) => (
        <ButtonWrapper
          value={link}
          id={index}
          onClick={event => onChange(parseInt(event.target.id, 10))}
          key={index}
          active={activePane === index ? true : false}
          {...otherProps}
        />
      ))}
    </Tool>
    {panes.map((pane, index) => (
      <Pane active={activePane === index ? true : false} key={index}>
        {pane}
      </Pane>
    ))}
  </TabWrapper>
);

Tab.propTypes = {
  tabBar: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  panes: PropTypes.arrayOf(PropTypes.node).isRequired,
  onChange: PropTypes.func.isRequired,
  activePane: PropTypes.number.isRequired
};

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled(Button)`
  &:not(:last-child) {
    margin-right: ${({ theme: { margins } }) => margins.default};
  }
`;
