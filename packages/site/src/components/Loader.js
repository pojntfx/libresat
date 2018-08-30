import React from "react";
import { Loader as LoaderTemplate } from "semantic-ui-react";

export const Loader = ({ small, ...otherProps }) =>
  small ? (
    <LoaderTemplate active inline="centered" {...otherProps} />
  ) : (
    <LoaderTemplate
      active
      inline="centered"
      content="Loading ..."
      {...otherProps}
    />
  );
