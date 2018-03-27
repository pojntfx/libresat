import Link from "next/link";

export const DocsSideBar = () => (
  <DocsSection title="Getting started">
    <DocLink
      link="getting-started/five-minute-guide"
      name="Five Minute Guide"
    />
  </DocsSection>
);

const DocsSection = ({ title, children }) => (
  <div>
    <DocSubHeading title={title} />
    <nav>{children}</nav>
  </div>
);

const DocSubHeading = ({ title }) => <h4>{title}</h4>;

const DocLink = ({ link, name }) => (
  <Link href={`/docs/${link}`}>
    <a>{name}</a>
  </Link>
);
