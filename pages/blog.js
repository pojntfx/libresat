import { LightLayout } from "../layouts/LightLayout";
import { BlogPostPreview } from "../components/blog/BlogPostPreview";

export default () => (
  <LightLayout title="Blog">
    <BlogPostPreview
      title="Website status update"
      date="2018-03-27"
      authors="Felicitas Pojtinger"
      link="status/website-2018-march"
      intro="Lorem ipsum dolor sit amet."
    />
  </LightLayout>
);
