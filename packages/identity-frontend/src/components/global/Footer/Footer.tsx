import * as React from "react";
import { Socials } from "./Socials/Socials";
import { Grid, Modal, SemanticWIDTHS } from "semantic-ui-react";
import { LegalInfo } from "./Legal/LegalInfo";
import { Wrapper } from "./Wrapper";
import { Section } from "./Section";
import { LegalGrid } from "./Legal/LegalGrid";
import { LegalModalTriggerButton } from "./Legal/MetaButton";
import { IFooterProps } from "../../../types";

const Footer = ({ socialLinks, legal: { global, licenses } }: IFooterProps) => (
  <Wrapper>
    <Socials links={socialLinks} />
    <Grid stackable columns={2}>
      <Section width={4}>
        <span>
          &copy; {global.timeSpan} {global.holder}
        </span>
      </Section>
      <Section width={12}>
        <LegalGrid stackable columns={16 / licenses.length}>
          {licenses.map(
            (
              {
                product,
                icon,
                timeSpan,
                holder,
                spdxLicenseIdentifier,
                text,
                badge,
                more
              },
              index
            ) => (
              <Grid.Column
                width={(16 / licenses.length) as SemanticWIDTHS}
                key={index}
              >
                <Modal
                  trigger={
                    <LegalModalTriggerButton
                      icon={icon}
                      content={`${product} License`}
                      fluid
                    />
                  }
                  closeIcon
                >
                  <Modal.Header>{product} License</Modal.Header>
                  <LegalInfo
                    product={product}
                    timeSpan={timeSpan}
                    icon={icon}
                    holder={holder}
                    spdxLicenseIdentifier={spdxLicenseIdentifier}
                    text={text}
                    badge={badge}
                    more={more}
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

export { Footer, IFooterProps };
