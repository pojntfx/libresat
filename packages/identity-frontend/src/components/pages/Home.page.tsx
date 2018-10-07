import * as React from "react";
import { Button } from "semantic-ui-react";
import { DefaultLayout } from "../layouts";
import { navbarData } from "../../data";

interface IHomePage {
  props?: any;
}

const HomePage = (props: IHomePage) => (
  <DefaultLayout
    title={navbarData.title}
    subtitle={navbarData.subtitle}
    homeLink={navbarData.homeLink}
    startItems={navbarData.startItems}
    {...props}
  >
    <Button>Hello, world!</Button>
  </DefaultLayout>
);

export { HomePage };
