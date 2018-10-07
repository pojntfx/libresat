import styled from "styled-components";
import { Menu } from "semantic-ui-react";
import { CENTER_MENU_WIDTH } from "./EdgeMenu";

const CenterMenu = styled(Menu.Menu)`
  margin: 0 auto !important;
  @media (min-width: ${CENTER_MENU_WIDTH}) {
    width: 1127px;
  }
`;

export { CenterMenu };
