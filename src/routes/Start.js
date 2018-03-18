import React from "react";

// Router
import { Link } from "react-router-dom";

export const Start = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
      </ul>
    </nav>
  );
};
