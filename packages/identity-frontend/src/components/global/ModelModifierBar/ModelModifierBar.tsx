import * as React from "react";
import { Segment as SegmentTemplate, Input } from "semantic-ui-react";
import styled from "styled-components";
import { Button } from "../Button";

interface IModelModifierBarProps {
  create: {
    title: string;
    icon: string;
    onCreate(): any;
    popover: {
      title: string;
      text: string;
    };
  };
  search: {
    text: string;
    icon: string;
  };
}

const Segment = styled(SegmentTemplate)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
`;

const ModelModifierBar = ({
  create,
  search,
  ...otherProps
}: IModelModifierBarProps) => (
  <Segment {...otherProps}>
    <Button
      {...create}
      content={create.title}
      icon={create.icon}
      onClick={create.onCreate}
    />
    <Input {...search} icon={search.icon} placeholder={search.text} />
  </Segment>
);

export { ModelModifierBar };
