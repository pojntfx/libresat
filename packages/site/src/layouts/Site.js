import React from "react";
import { Base } from "./Base";
import { PageHeader } from "../components/Blog/Headers/PageHeader";
import { Head } from "../components/Head";
import { Paper } from "../components/Paper";

// This will be used as an alternative to the MDX import-export paradigm in the future
export default ({ title, header, subheader, children }) => (
  <Base>
    <Head title={title} />
    <PageHeader as="h1" content={header} subheader={subheader} />
    <Paper>{children}</Paper>
  </Base>
);
