import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

enum EDividerOffset {
  top = "top",
  bottom = "bottom"
}

interface IDividerProps {
  offset: EDividerOffset;
  title: string;
  icon: SemanticICONS;
}

interface IDividerWrapperProps {
  offset: IDividerProps["offset"];
}

export { IDividerProps, IDividerWrapperProps };
