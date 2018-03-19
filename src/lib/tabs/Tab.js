import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

// Components
import { Button } from "../button/Button";
import { Pane } from "./Pane";

export const Tab = ({ links, panes, activePane, onChange, ...rest }) => (
  <TabWrapper>
    {links.map((link, index) => (
      <ButtonWrapper
        value={link}
        id={index}
        onClick={event => onChange(parseInt(event.target.id, 10))}
        key={index}
        active={activePane === index ? true : false}
        {...rest}
      />
    ))}
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

const TabWrapper = styled.div``;

const ButtonWrapper = styled(Button)`
  font-weight: ${({ active }) => (active ? "bolder" : "inherit")};
`;
