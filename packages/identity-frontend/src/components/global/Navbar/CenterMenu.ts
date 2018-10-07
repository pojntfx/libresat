import styled from "styled-components";
import { Menu } from "semantic-ui-react";

const CenterMenu = styled(Menu.Menu)`
  margin: 0 auto !important;
  @media (min-width: 1200px) {
    width: 1127px;
  }
`;

export { CenterMenu };
