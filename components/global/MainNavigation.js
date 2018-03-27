import Link from "next/link";

export const MainNavigation = ({ links }) => (
  <nav>
    <NamedNavLink name="Logo" link="" internal />
    {links.map(link => <InternalNavLink key={link} link={link} />)}
  </nav>
);

const NamedNavLink = ({ name, link, internal }) =>
  internal ? (
    <Link href={`/${link.toLowerCase()}`} key={link}>
      <a>{name}</a>
    </Link>
  ) : (
    <a href={link} key={link}>
      {name}
    </a>
  );

const InternalNavLink = ({ link }) => (
  <Link href={`/${link.toLowerCase()}`} key={link}>
    <a>{link}</a>
  </Link>
);
