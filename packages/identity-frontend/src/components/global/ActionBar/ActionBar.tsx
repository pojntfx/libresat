import * as React from "react";
import { HorizontalScrollSegment } from "../HorizontalScrollSegment";
import { Help } from "../Help/Help";
import { ActionBarButton } from "./ActionBarButton";
import { ActionBarInput } from "./ActionBarInput";
import { IActionBarProps } from "../../../types";

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
