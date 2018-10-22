interface IHelp {
  title: string;
  text: string;
  command: string;
  docsLink: string;
}

interface IHelpProps extends IHelp {
  children: JSX.Element;
}

export { IHelp, IHelpProps };
