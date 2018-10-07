import * as React from "react";
import { Button } from "semantic-ui-react";
import { DefaultLayout } from "../layouts";
import { navbarData } from "../../data";

interface IHomePage {
  props?: any;
}

const HomePage = (props: IHomePage) => (
  <DefaultLayout
    firstItems={navbarData.firstItems}
    startItems={navbarData.startItems}
    endItems={navbarData.endItems}
    lastItems={navbarData.lastItems}
    {...props}
  >
    <Button>Hello, world!</Button>
  </DefaultLayout>
);

export { HomePage };
