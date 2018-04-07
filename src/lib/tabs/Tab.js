import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

// Components
import { Button } from "../button/Button";
import { Pane } from "./Pane";

/**
 * A tab.
 * @param {links} links Tab titles
 * @param {panes} panes Tab content
 * @param {activePane} activePane Active pane (the one that is currently visible)
 * @param {onChange} onChange Event handler (gets fired when a tab title has been clicked)
 * @param {...otherProps} ...otherProps Other (HTML5) properties that should be applied to the title headers
 */
export const Tab = ({ links, panes, activePane, onChange, ...otherProps }) => (
  <TabWrapper>
    <TabControlsWrapper>
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
    </TabControlsWrapper>
    {panes.map((pane, index) => (
      <Pane active={activePane === index ? true : false} key={index}>
        {pane}
      </Pane>
    ))}
  </TabWrapper>
);

Tab.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  panes: PropTypes.arrayOf(PropTypes.node).isRequired,
  onChange: PropTypes.func.isRequired,
  activePane: PropTypes.number.isRequired
};

const TabControlsWrapper = styled.menu`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin: 0;
  padding: 0;
`;

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled(Button)``;
