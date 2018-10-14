import * as React from "react";
import { HorizontalScrollSegment } from "../HorizontalScrollSegment";
import { Help, IHelp } from "../Help/Help";
import { ActionBarButton } from "./ActionBarButton";
import { ActionBarInput } from "./ActionBarInput";

interface IActionBarProps {
  create: {
    title: string;
    icon: string;
    onCreate(): any;
    help: IHelp;
  };
  search: {
    text: string;
    icon: string;
    value: string;
    onSearch(): any;
    help: IHelp;
  };
}

const ActionBar = ({ create, search, ...otherProps }: IActionBarProps) => (
  <HorizontalScrollSegment {...otherProps}>
    <Help
      {...create.help}
      trigger={
        <ActionBarButton
          icon={create.icon}
          content={create.title}
          onClick={create.onCreate}
        />
      }
    />
    <Help
      {...search.help}
      trigger={
        <ActionBarInput
          icon={search.icon}
          placeholder={search.text}
          onChange={search.onSearch}
          value={search.value}
        />
      }
    />
  </HorizontalScrollSegment>
);

export { ActionBar };
