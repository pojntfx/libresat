import { DefaultLayout } from "../layouts/DefaultLayout";
import { BlogPostPreview } from "../components/blog/BlogPostPreview";

export default () => (
  <DefaultLayout>
    <h1>Blog</h1>
    <BlogPostPreview
      title="Website status update"
      date="2018-03-27"
      authors="Felix Pojtinger"
      link="status/website-2018-march"
      intro="Lorem ipsum dolor sit amet."
    />
  </DefaultLayout>
);
