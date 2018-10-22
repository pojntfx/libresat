interface IHelpProps extends IHelp {
  children: JSX.Element;
}
interface IHelp {
  title: string;
  text: string;
  command: string;
  docsLink: string;
}

export { IHelp, IHelpProps };
