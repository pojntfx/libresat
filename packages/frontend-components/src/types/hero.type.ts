import { SemanticCOLORS } from "semantic-ui-react";

interface IHeroProps {
  title: string;
  subtitle: string;
  primaryAction: IHeroPrimaryActionProps;
  secondaryAction: IHeroVideoActionProps;
  linkComponent: JSX.Element;
}

interface IHeroActionProps {
  title: string;
  header: string;
  icon: SemanticCOLORS;
  disabled: boolean;
}

interface IHeroPrimaryActionProps extends IHeroActionProps {
  link: string;
}

interface IHeroVideoActionProps extends IHeroActionProps {
  video: string;
}

export { IHeroProps, IHeroPrimaryActionProps, IHeroVideoActionProps };
