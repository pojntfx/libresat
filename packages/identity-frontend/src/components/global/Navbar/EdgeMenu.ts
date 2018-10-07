import styled from "styled-components";
import { Menu } from "semantic-ui-react";

const EDGE_MENU_WIDTH = "230px";
const CENTER_MENU_WIDTH = "1676px";

const EdgeMenu = styled(Menu.Menu)`
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
  width: ${EDGE_MENU_WIDTH};
  @media (max-width: ${CENTER_MENU_WIDTH}) {
    &:first-child {
      margin-right: 0.8em !important;
    }
    &:last-child {
      margin-left: 2em !important;
    }
  }
`;

export { EdgeMenu, CENTER_MENU_WIDTH };
