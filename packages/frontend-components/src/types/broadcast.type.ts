interface IBroadcastProps {
  title: string;
  text: string;
  icon: string;
  readMoreLink: string;
  readMoreText: string;
  linkComponent(
    to: IBroadcastProps["readMoreLink"],
    children: JSX.Element | JSX.Element[]
  ): JSX.Element;
}

export { IBroadcastProps };
