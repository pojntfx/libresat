import Link from "next/link";
import { withRouter } from "next/router";
import { Children } from "react";

export const MainNavigation = ({ links }) => (
  <nav>
    <NamedNavLink name="Logo" link="" internal />
    {links.map(link => <InternalNavLink key={link} link={link} />)}
    <NamedNavLink name="Source Code" link="https://github.com/opensdcp" />
  </nav>
);

const NamedNavLink = ({ name, link, internal }) =>
  internal ? (
    <ActiveLink href={`/${link.toLowerCase()}`} key={link}>
      <a>{name}</a>
    </ActiveLink>
  ) : (
    <a href={link} key={link}>
      {name}
    </a>
  );

const InternalNavLink = ({ link }) => (
  <ActiveLink href={`/${link.toLowerCase()}`} key={link}>
    <a>{link}</a>
  </ActiveLink>
);

const ActiveLink = withRouter(({ router, children, ...props }) => (
  <Link {...props}>
    {React.cloneElement(Children.only(children), {
      className:
        `/${router.pathname.split("/")[1]}` === props.href ? `active` : null
    })}
  </Link>
));
