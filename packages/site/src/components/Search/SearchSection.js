import React from "react";
import { SearchFilter } from "./Search";

const exampleSource = [
  {
    title: "First page",
    content: "<h1>First page title</h1><p>First page content</p>",
    link: "/first",
    secretNumber: 1027
  },
  {
    title: "Second page",
    content: "<h1>Second page title</h1><p>Second page content</p>",
    link: "/second",
    tags: [
      "I am human",
      "This is a text",
      {
        name: "Nested tag",
        link: "/third",
        moreTags: [
          {
            link: "/fourth",
            name: "Deeply nested tag",
            tags: ["Super heavily nested tag", 3458478]
          }
        ]
      }
    ]
  }
];

export const SearchSection = props => (
  <SearchFilter source={exampleSource} {...props} />
);
