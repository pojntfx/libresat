import * as React from "react";
import { Popup } from "semantic-ui-react";
import { HelpPopupHeader } from "./HelpPopupHeader";
import { HelpDocsLink } from "./HelpDocsLink";
import { HelpAccordion } from "./HelpAccordion";
import { IHelpProps } from "../../../types";
import { Button } from "../Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { HelpInput } from "./HelpInput";

const Help = ({
  title,
  text,
  docsLink,
  command,
  children,
  ...otherProps
}: IHelpProps) => (
  <Popup
    hoverable
    flowing
    keepInViewPort
    wide="very"
    trigger={React.cloneElement(children, otherProps)} // Enable passing props such as onClick to triggers
    {...otherProps}
  >
    <HelpPopupHeader>
      {title} <HelpDocsLink href={docsLink}>Docs</HelpDocsLink>
    </HelpPopupHeader>
    <Popup.Content>
      {text}
      <br />
      {command ? (
        <HelpAccordion
          panels={[
            {
              title: "Terminal",
              key: 1,
              content: {
                content: (
                  <HelpInput
                    fluid
                    label={command[0]} // $ or #
                    value={command.substring(2)}
                    action={
                      <CopyToClipboard
                        text={
                          command[0] === "$"
                            ? command.substring(2)
                            : `sudo ${command.substring(2)}`
                        }
                      >
                        <Button icon="copy" content="Copy" />
                      </CopyToClipboard>
                    }
                  />
                )
              }
            }
          ]}
        />
      ) : null}
    </Popup.Content>
  </Popup>
);

export { Help };
