import { Fragment } from "react";
import Link from "next/link";

export const SubNavigation = ({ title, links }) => (
  <Fragment>
    <h1>{title}</h1>
    <nav>
      {links.map(({ name, link }) => (
        <SectionNavLink name={name} link={link} key={link} />
      ))}
    </nav>
  </Fragment>
);

const SectionNavLink = ({ name, link }) => (
  <Link href={`#${link}`} key={link}>
    <a>{name}</a>
  </Link>
);
