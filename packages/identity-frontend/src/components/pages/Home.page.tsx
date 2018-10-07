import * as React from "react";
import { Button } from "semantic-ui-react";
import { DefaultLayout } from "../layouts";

interface IHomePage {
  props?: any;
}

const HomePage = (props: IHomePage) => (
  <DefaultLayout {...props}>
    <Button>Hello, world!</Button>
  </DefaultLayout>
);

export { HomePage };
