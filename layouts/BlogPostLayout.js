import { DefaultLayout } from "./DefaultLayout";

export const BlogPostLayout = ({ title, date, authors, children }) => (
  <DefaultLayout>
    <aside>
      <h1>{title}</h1>
      <div>
        {date} by {authors}
      </div>
    </aside>
    {children}
  </DefaultLayout>
);
