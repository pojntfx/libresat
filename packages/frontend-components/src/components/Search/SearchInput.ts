import styled from "react-emotion";
import { Input, InputProps } from "semantic-ui-react";

const SearchInput = styled(Input)`
  ${(props: InputProps) =>
    props.value.length < 1 ? "margin-bottom: 10em;" : null} & > .ui.icon.input {
    width: 100%;
  }
`;

export { SearchInput };
