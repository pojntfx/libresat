import styled from "react-emotion";
import { Card, CardProps } from "semantic-ui-react";

const ActionCard = styled(Card)`
  & > .content {
    & > h2 {
      ${(props: CardProps) =>
        props.disabled ? "color: grey!important" : null};
    }
  }
`;

export { ActionCard };
