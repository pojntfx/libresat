interface IPageNotFoundProps {
  image: string;
  homeLink: string;
  linkComponent: JSX.Element;
  headComponent(title: string): JSX.Element;
}

export { IPageNotFoundProps };
