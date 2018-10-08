import * as React from "react";
import { Button } from "semantic-ui-react";
import { DefaultLayout } from "../layouts";
import { navbarData, footerData } from "../../data";
import { INavbarProps } from "../global";
import { IFooterContentProps } from "../global/Footer/Content";

interface IHomePage {
  props?: any;
}

const HomePage = (props: IHomePage) => (
  <DefaultLayout
    navbar={navbarData as INavbarProps}
    footer={footerData as IFooterContentProps}
    {...props}
  >
    <Button>Hello, world!</Button>
  </DefaultLayout>
);

export { HomePage };
