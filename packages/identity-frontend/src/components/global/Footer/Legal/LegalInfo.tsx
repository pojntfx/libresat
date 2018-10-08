import * as React from "react";
import { Modal, SemanticICONS } from "semantic-ui-react";
import { LegalBadge } from "./LegalBadge";
import { LegalText } from "./LegalText";
import { ILegalInfoProps } from "../../../../types";

const LegalInfo = ({
  product,
  type,
  timeSpan,
  holder,
  spdxLicenseIdentifier,
  text,
  badge,
  more
}: ILegalInfoProps) => (
  <Modal.Content>
    <LegalBadge src={badge.img} alt={badge.title} href={more.link} />
    <p>
      {product} {type} &copy; {timeSpan} {holder}
    </p>
    <span>SPDX-License-Identifier: {spdxLicenseIdentifier}</span>
    <br />
    <LegalText>{text}</LegalText>
    <p>
      Find out more about this license over at{" "}
      <a href={more.link}>{more.title}</a>.
    </p>
  </Modal.Content>
);

export { LegalInfo };
