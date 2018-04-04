import { DefaultLayout } from "../layouts/DefaultLayout";
import { Section } from "../components/global/Section";
import { ResponsiveLocalStorageLayout } from "../components/demo/DemoGridLayout";

export default () => (
  <DefaultLayout
    title="Demo"
    sublinks={[
      { name: "Hosted Version", link: "hosted-version" },
      { name: "Features", link: "features" }
    ]}
  >
    <Section title="Hosted Version" id="hosted-version">
      <ResponsiveLocalStorageLayout />
    </Section>
    <Section title="Features" id="features">
      What this demo can do
    </Section>
  </DefaultLayout>
);
