import * as React from "react";
import { Socials } from "./Socials/Socials";
import { Grid, Modal, SemanticWIDTHS, GridProps } from "semantic-ui-react";
import { LegalInfo } from "./Legal/LegalInfo";
import { Wrapper } from "./Wrapper";
import { Section } from "./Section";
import { LegalGrid } from "./Legal/LegalGrid";
import { Help } from "../Help/Help";
import { Button } from "../Button";
import { IFooterProps } from "../../types/footer.type";
import { ShortcutModalView } from "../ShortcutModal/ShortcutModalView";
import { IShortcutModalViewProps } from "../../types";

const Footer = ({
  socialLinks,
  legal: { global, licenses },
  shortcuts
}: IFooterProps) => (
  <Wrapper>
    <Socials links={socialLinks} />
    <Grid stackable columns={2}>
      <Section width={4}>
        <Help {...global.help}>
          <span>
            &copy; {global.timeSpan} {global.holder}
          </span>
        </Help>
      </Section>
      <Section width={12}>
        <LegalGrid
          stackable
          columns={
            (shortcuts
              ? licenses.length + 1
              : licenses.length) as SemanticWIDTHS
          }
        >
          {shortcuts && (
            <Grid.Column>
              <ShortcutModalView
                {...shortcuts.shortcuts}
                trigger={
                  <Help {...shortcuts.shortcutTrigger.help}>
                    <Button
                      fluid
                      icon={shortcuts.shortcutTrigger.icon}
                      content={shortcuts.shortcutTrigger.title}
                      disabled={shortcuts.shortcutTrigger.disabled}
                    />
                  </Help>
                }
                shortcuts={
                  (shortcuts.shortcuts
                    .shortcuts as unknown) as IShortcutModalViewProps["shortcuts"]
                }
              />
            </Grid.Column>
          )}
          {licenses.map(
            (
              {
                product,
                type,
                icon,
                timeSpan,
                holder,
                spdxLicenseIdentifier,
                text,
                badge,
                more,
                help
              },
              index
            ) => (
              <Grid.Column key={index}>
                <Modal
                  trigger={
                    <Help {...help}>
                      <Button icon={icon} content={`${type} License`} fluid />
                    </Help>
                  }
                  closeIcon
                >
                  <Modal.Header>{type} License</Modal.Header>
                  <LegalInfo
                    product={product}
                    type={type}
                    timeSpan={timeSpan}
                    icon={icon}
                    holder={holder}
                    spdxLicenseIdentifier={spdxLicenseIdentifier}
                    text={text}
                    badge={badge}
                    more={more}
                    help={help}
                  />
                </Modal>
              </Grid.Column>
            )
          )}
        </LegalGrid>
      </Section>
    </Grid>
  </Wrapper>
);

export { Footer };
