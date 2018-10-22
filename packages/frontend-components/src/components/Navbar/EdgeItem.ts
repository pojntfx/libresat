import styled from "react-emotion";
import { Menu } from "semantic-ui-react";

const EDGE_ITEM_WIDTH = "11em";

const EdgeItem = styled(Menu.Item)`
  width: ${EDGE_ITEM_WIDTH};
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
`;

export { EdgeItem, EDGE_ITEM_WIDTH };
