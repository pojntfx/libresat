import * as React from "react";
import { Modal, SemanticICONS } from "semantic-ui-react";
import { Badge } from "./Badge";
import { Text } from "./Text";

interface IInfo {
  product: string;
  icon: SemanticICONS;
  timeSpan: string;
  holder: string;
  spdxLicenseIdentifier: string;
  text: string;
  badge: IBadge;
  more: IMore;
}

interface IBadge {
  img: string;
  title: string;
}

interface IMore {
  link: string;
  title: string;
}

const Info = ({
  product,
  timeSpan,
  holder,
  spdxLicenseIdentifier,
  text,
  badge,
  more
}: IInfo) => (
  <Modal.Content>
    <Badge src={badge.img} alt={badge.title} href={more.link} />
    <p>
      {product} &copy; {timeSpan} {holder}
    </p>
    <span>SPDX-License-Identifier: {spdxLicenseIdentifier}</span>
    <br />
    <Text>{text}</Text>
    <p>
      Find out more about this license over at{" "}
      <a href={more.link}>{more.title}</a>.
    </p>
  </Modal.Content>
);

export { Info, IBadge, IMore };
