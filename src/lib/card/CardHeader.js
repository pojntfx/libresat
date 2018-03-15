// Styled components
import styled from "styled-components";

// Styling constants
import { cardInnerRadius, cardHeaderFontWeight } from "../constants";

const CardHeader = styled.div`
  padding: ${cardInnerRadius};
  font-weight: ${cardHeaderFontWeight};
`;

export default CardHeader;
