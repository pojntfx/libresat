import { DefaultLayout } from "../layouts/DefaultLayout";
import { Section } from "../components/global/Section";

export default () => (
  <DefaultLayout
    title="Hardware"
    sublinks={[{ name: "Overview", link: "overview" }]}
  >
    <Section title="Overview" id="overview">
      Hardware description
    </Section>
  </DefaultLayout>
);
