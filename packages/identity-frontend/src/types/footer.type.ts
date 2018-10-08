import { SemanticICONS } from "semantic-ui-react";

interface IFooterProps {
  socialLinks: ISocialLinkProps[];
  legal: ILegal;
}

interface ILegal {
  global: ILegalGlobal;
  licenses: ILegalLicense[];
}

interface ILegalGlobal {
  product: string;
  type: string;
  timeSpan: string;
  holder: string;
}

interface ILegalBadge {
  img: string;
  title: string;
}

interface ILegalMore {
  link: string;
  title: string;
}

interface ISocialLink {
  title: string;
  img: string;
  link: string;
}

interface ILegalLicense extends ILegalGlobal {
  icon: SemanticICONS;
  spdxLicenseIdentifier: string;
  text: string;
  badge: ILegalBadge;
  more: ILegalMore;
}

interface ILegalInfoProps extends ILegalLicense {}

interface ILegalBadgeProps {
  src: ILegalBadge["img"];
  alt: ILegalBadge["title"];
  href: ILegalLicense["more"]["link"];
}

interface ILegalTextProps {
  children: JSX.Element | string;
}

interface ISocialsProps {
  links: ISocialLinkProps[];
}

interface ISocialLinkProps extends ISocialLink {}

interface ISocialButton extends ISocialLink {}

export {
  IFooterProps,
  ILegal,
  ILegalGlobal,
  ILegalBadge,
  ILegalMore,
  ILegalLicense,
  ILegalInfoProps,
  ILegalBadgeProps,
  ILegalTextProps,
  ISocialsProps,
  ISocialButton
};
