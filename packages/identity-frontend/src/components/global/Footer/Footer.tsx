import * as React from "react";
import { Socials } from "./Socials/Socials";
import { Grid, Modal, SemanticWIDTHS } from "semantic-ui-react";
import { LegalInfo } from "./Legal/LegalInfo";
import { Wrapper } from "./Wrapper";
import { Section } from "./Section";
import { LegalGrid } from "./Legal/LegalGrid";
import { IFooterProps } from "../../../types";
import { Button } from "@libresat/frontend-components";
import { Help } from "../Help/Help";

const Footer = ({ socialLinks, legal: { global, licenses } }: IFooterProps) => (
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
        <LegalGrid stackable columns={16 / licenses.length}>
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
              <Grid.Column
                width={(16 / licenses.length) as SemanticWIDTHS}
                key={index}
              >
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
