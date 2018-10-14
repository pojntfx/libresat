import * as React from "react";
import {
  Segment as SegmentTemplate,
  Input,
  Popup,
  Accordion as AccordionTemplate
} from "semantic-ui-react";
import styled from "styled-components";
import { Button } from "../Button";

interface IModelModifierBarPopoverProps {
  title: string;
  text: string;
  command: string;
  docsLink: string;
}

interface IModelModifierBarProps {
  create: {
    title: string;
    icon: string;
    onCreate(): any;
    popover: IModelModifierBarPopoverProps;
  };
  search: {
    text: string;
    icon: string;
    value: string;
    onSearch(): any;
    popover: IModelModifierBarPopoverProps;
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

interface IHelpProps extends IModelModifierBarPopoverProps {
  trigger: JSX.Element;
}

const Link = styled.a`
  margin-left: 1em;
`;

const Help = ({ title, text, docsLink, command, trigger }: IHelpProps) => (
  <Popup hoverable flowing trigger={trigger}>
    <PopupHeader>
      {title} <Link href={docsLink}>Docs</Link>
    </PopupHeader>
    <Popup.Content>
      {text}
      <br />
      <Accordion
        panels={[
          {
            title: "Terminal",
            key: 1,
            content: {
              content: (
                <Input
                  label={command[0]} // $ or #
                  value={command.substring(2)}
                />
              )
            }
          }
        ]}
      />
    </Popup.Content>
  </Popup>
);

const ModelModifierBar = ({
  create,
  search,
  ...otherProps
}: IModelModifierBarProps) => (
  <Segment {...otherProps}>
    <Help
      trigger={
        <Button
          icon={create.icon}
          content={create.title}
          onClick={create.onCreate}
        />
      }
      {...create.popover}
    />
    <Help
      trigger={
        <Input
          icon={search.icon}
          placeholder={search.text}
          onChange={search.onSearch}
          value={search.value}
        />
      }
      {...search.popover}
    />
  </Segment>
);

export { ModelModifierBar };
