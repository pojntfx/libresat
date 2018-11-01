import * as React from "react";
import { Fragment } from "react";
import { IShortcutModalViewProps } from "../../types";
import { Modal, Grid, Card } from "semantic-ui-react";
import { ShortcutModalKeyWrapper } from "./ShortcutModalKeyWrapper";
import { ShortcutModalGroupWrapper } from "./ShortcutModalGroupWrapper";
import { ShortcutModalKeysWrapper } from "./ShortcutModalKeysWrapper";
import { ShortcutModalKeyWrapperDivider } from "./ShortcutModalKeyWrapperDivider";

const ShortcutModalView = ({
  title,
  shortcuts,
  modalIsOpen,
  toggleModal,
  trigger
}: IShortcutModalViewProps) => (
  <Modal
    centered
    closeIcon
    open={modalIsOpen}
    onClose={toggleModal}
    trigger={trigger}
  >
    <Modal.Header>{title}</Modal.Header>
    <Modal.Content>
      <Grid columns={2} doubling stackable>
        <Grid.Row stretched>
          {shortcuts.map((shortcutGroup, index) => (
            <ShortcutModalGroupWrapper key={index}>
              <Card fluid>
                <Card.Content>
                  <Card.Header>{shortcutGroup.title}</Card.Header>
                  <Card.Description>
                    <Grid>
                      {shortcutGroup.shortcuts.map((shortcut, index) => (
                        <Grid.Row columns="equal" key={index}>
                          <Grid.Column verticalAlign="middle" textAlign="right">
                            <ShortcutModalKeysWrapper>
                              {shortcut.keys.map(
                                (key, index) =>
                                  index !== shortcut.keys.length - 1 ? (
                                    <Fragment key={index}>
                                      <ShortcutModalKeyWrapper
                                        inverted
                                        key={index}
                                      >
                                        <code>{key}</code>
                                      </ShortcutModalKeyWrapper>
                                      <ShortcutModalKeyWrapperDivider>
                                        +
                                      </ShortcutModalKeyWrapperDivider>
                                    </Fragment>
                                  ) : (
                                    <ShortcutModalKeyWrapper
                                      inverted
                                      key={index}
                                    >
                                      <code>{key}</code>
                                    </ShortcutModalKeyWrapper>
                                  )
                              )}
                            </ShortcutModalKeysWrapper>
                          </Grid.Column>
                          <Grid.Column verticalAlign="middle">
                            {shortcut.title}
                          </Grid.Column>
                        </Grid.Row>
                      ))}
                    </Grid>
                  </Card.Description>
                </Card.Content>
              </Card>
            </ShortcutModalGroupWrapper>
          ))}
        </Grid.Row>
      </Grid>
    </Modal.Content>
  </Modal>
);

export { ShortcutModalView };
