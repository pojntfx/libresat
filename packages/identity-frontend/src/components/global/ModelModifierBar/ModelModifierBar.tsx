import * as React from "react";
import {
  Segment as SegmentTemplate,
  Input,
  Popup,
  Accordion as AccordionTemplate
} from "semantic-ui-react";
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
      command: string;
      docsLink: string;
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

const PopupHeader = styled(Popup.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Accordion = styled(AccordionTemplate)`
  & > .title:not(.active) {
    padding-bottom: 0 !important;
  }
`;

const ModelModifierBar = ({
  create,
  search,
  ...otherProps
}: IModelModifierBarProps) => (
  <Segment {...otherProps}>
    <Popup
      hoverable
      trigger={
        <Button
          content={create.title}
          icon={create.icon}
          onClick={create.onCreate}
        />
      }
    >
      <PopupHeader>
        {create.popover.title} <a href={create.popover.docsLink}>Docs</a>
      </PopupHeader>
      <Popup.Content>
        {create.popover.text}
        <br />
        <Accordion
          panels={[
            {
              title: "Terminal",
              key: 1,
              content: {
                content: (
                  <Input
                    label={create.popover.command[0]}
                    value={create.popover.command.substring(2)}
                  />
                )
              }
            }
          ]}
        />
      </Popup.Content>
    </Popup>
    <Input {...search} icon={search.icon} placeholder={search.text} />
  </Segment>
);

export { ModelModifierBar };
