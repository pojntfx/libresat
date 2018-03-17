import React from "react";

// Router
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      This page does not exist (anymore?). <Link to="/">Go home</Link>
    </div>
  );
};

export default PageNotFound;
