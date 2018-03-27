import { DefaultLayout } from "../layouts/DefaultLayout";
import { Section } from "../components/global/Section";

export default () => (
  <DefaultLayout
    title="Network"
    sublinks={[{ name: "Overview", link: "overview" }]}
  >
    <Section title="Overview" id="overview">
      Network description
    </Section>
  </DefaultLayout>
);
