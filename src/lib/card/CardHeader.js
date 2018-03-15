// Styled components
import styled from "styled-components";

// Styling constants
import { cardInnerPadding, cardHeaderFontWeight } from "../constants";

const CardHeader = styled.div`
  padding: ${cardInnerPadding};
  font-weight: ${cardHeaderFontWeight};
`;

export default CardHeader;
