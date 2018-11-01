import { SemanticICONS } from "semantic-ui-react";
import { IHelp } from "./help.type";
import { IShortcutModalViewProps } from "./shortcutModal.type";

interface IFooterProps {
  socialLinks: ISocialLinkProps[];
  legal: ILegal;
  shortcuts?: IShortcutsWithHelp;
}

interface IShortcutsWithHelp {
  title: string;
  shortcutTrigger: IShortcutsTrigger;
  shortcuts: IShortcutModalViewProps;
}

interface IShortcutsTrigger {
  title: string;
  icon: SemanticICONS;
  help: IHelp;
}

interface ILegal {
  global: ILegalGlobal;
  licenses: ILegalLicense[];
}

interface ILegalGlobal {
  product: string;
  timeSpan: string;
  holder: string;
  help: IHelp;
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
  type: string;
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

interface ISocialButton extends ISocialLink {
  help: IHelp;
}

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
