interface IHelp {
  title: string;
  text: string;
  command: string;
  docsLink: string;
}

interface IHelpProps extends IHelp {
  trigger: JSX.Element;
}

export { IHelp, IHelpProps };
