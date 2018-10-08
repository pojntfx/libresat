import * as React from "react";
import { ILinkProps, Socials } from "./Socials";
import { SemanticICONS, Grid, Modal, SemanticWIDTHS } from "semantic-ui-react";
import { IBadge, IMore, Info } from "./Info";
import { Wrapper } from "./Wrapper";
import { Section } from "./Section";
import { LegalGrid } from "./LegalGrid";
import { MetaButton } from "./MetaButton";

interface IFooterContentProps {
  socialLinks: ILinkProps[];
  legal: ILegal;
}

interface ILegal {
  global: IGlobal;
  licenses: ILicense[];
}

interface IGlobal {
  product: string;
  timeSpan: string;
  holder: string;
}

interface ILicense extends IGlobal {
  icon: SemanticICONS;
  spdxLicenseIdentifier: string;
  text: string;
  badge: IBadge;
  more: IMore;
}

const FooterContent = ({
  socialLinks,
  legal: { global, licenses }
}: IFooterContentProps) => (
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
                    <MetaButton
                      icon={icon}
                      content={`${product} License`}
                      fluid
                    />
                  }
                  closeIcon
                >
                  <Modal.Header>{product} License</Modal.Header>
                  <Info
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

export { FooterContent, IFooterContentProps };
