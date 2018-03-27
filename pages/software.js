import { DefaultLayout } from "../layouts/DefaultLayout";
import { Section } from "../components/global/Section";

export default () => (
  <DefaultLayout
    title="Software"
    sublinks={[{ name: "Overview", link: "overview" }]}
  >
    <Section title="Overview" id="overview">
      Software description
    </Section>
  </DefaultLayout>
);
