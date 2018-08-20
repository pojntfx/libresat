import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div>
      This page does not exist (anymore?). <Link to="/">Go to start</Link>
    </div>
  );
};
