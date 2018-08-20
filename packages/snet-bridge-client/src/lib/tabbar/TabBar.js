import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

// Components
import { Tab } from "../tabs/Tab";

/**
 * A tab bar, has equal width buttons.
 * @param {links} links Tab titles
 * @param {panes} panes Tab content
 * @param {activePane} activePane Active pane (the one that is currently visible)
 * @param {onChange} onChange Event handler (gets fired when a tab title has been clicked)
 * @param {...otherProps} ...otherProps Other properties that should be applied to the title headers
 */
export const TabBar = ({ links, panes, onChange, activePane }) => (
  <TabBarWrapper>
    <TabsWrapper
      links={links}
      panes={panes}
      onChange={onChange}
      activePane={activePane}
      tabBar
      equal
    />
  </TabBarWrapper>
);

const TabBarWrapper = styled.div`
  & > div {
    & > div:first-child > menu {
      background: ${({
        theme: {
          backgrounds: { bars }
        }
      }) => bars.default};
      padding: ${({ theme: { paddings } }) => paddings.default} 0;
      min-width: 100%;
    }
    & > div:first-child {
      padding: 0 ${({ theme: { paddings } }) => paddings.default};
    }
    & > div:not(:first-child) {
      padding: ${({ theme: { paddings } }) => paddings.default};
    }
  }
`;

const TabsWrapper = styled(Tab)``;

TabBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  panes: PropTypes.arrayOf(PropTypes.node).isRequired,
  onChange: PropTypes.func.isRequired,
  activePane: PropTypes.number.isRequired
};
