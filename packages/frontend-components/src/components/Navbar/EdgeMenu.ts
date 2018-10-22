import styled from "react-emotion";
import { Menu } from "semantic-ui-react";
import { EDGE_ITEM_WIDTH } from "./EdgeItem";

const EDGE_MENU_WIDTH = "350px";
const CENTER_MENU_WIDTH = "1676px";

const EdgeMenu = styled(Menu.Menu)`
  display: flex !important;
  justify-content: start;
  align-items: center;
  padding: 0 !important;
  width: ${EDGE_MENU_WIDTH};
  /* First menu should adapt to the brand */
  &:nth-child(2) {
    width: calc(${EDGE_MENU_WIDTH} - ${EDGE_ITEM_WIDTH}) !important;
  }
  &:last-child {
    justify-content: end !important;
  }
  @media (max-width: ${CENTER_MENU_WIDTH}) {
    &:last-child {
      margin-left: 2.5em !important;
    }
  }
`;

export { EdgeMenu, CENTER_MENU_WIDTH };
