import React from "react";
import { Link } from "react-router-dom";

export const Start = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
        <li>
          <Link to="/docs">UI Docs</Link>
        </li>
      </ul>
    </nav>
  );
};
