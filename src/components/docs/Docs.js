import React, { Component } from "react";

// Router
import { Link } from "react-router-dom";

// Styled components
import styled from "styled-components";

// Components
import {
  TextAreaDocs,
  TextFieldDocs,
  TabsDocs,
  SwitchDocs,
  SliderDocs,
  CheckBoxDocs,
  SelectDocs,
  ButtonDocs,
  NavBarDocs,
  ToolBarDocs,
  TabBarDocs,
  ListDocs
} from "../../lib/framework";

export class Docs extends Component {
  render() {
    return (
      <DocsWrapper>
        <header>
          <h1>OpenSNET Bridge Client UI Framework Docs</h1>
          <nav>
            <NavWrapper>
              <li>
                <Link to="/">Back to Start</Link>
              </li>
              <LinkList
                links={[
                  "Philosophy",
                  "Button",
                  "Switch",
                  "Checkbox",
                  "TextField",
                  "TextArea",
                  "Select",
                  "Slider",
                  "Tabs",
                  "NavBar",
                  "ToolBar",
                  "TabBar",
                  "List"
                ]}
              />
            </NavWrapper>
          </nav>
        </header>
        <aside>
          <section id="philosophy">
            <h2>Philosophy</h2>
            <p>This framework is highly opinionated and has minimal styling.</p>
            <figure>
              <blockquote cite="https://www.yatzer.com/as-little-design-as-possible-dieter-rams">
                Good design is as little design as possible.
              </blockquote>
              <figcaption>
                <em>- Dieter Rams</em>
              </figcaption>
            </figure>
            <p>It{"'"}s main goals are:</p>
            <ul>
              <li>Minimalism</li>
              <li>Speed</li>
              <li>Maintainability</li>
            </ul>
            <p>
              If you have new ideas or spot any issues, feel free to let us know
              on{" "}
              <a href="https://github.com/opensdcp/opensnet-bridge-client">
                GitHub
              </a>!
            </p>
          </section>
        </aside>
        <main>
          <ButtonDocs />
          <SwitchDocs />
          <CheckBoxDocs />
          <TextFieldDocs />
          <TextAreaDocs />
          <SelectDocs />
          <SliderDocs />
          <TabsDocs />
          <NavBarDocs />
          <ToolBarDocs />
          <TabBarDocs />
          <ListDocs />
        </main>
      </DocsWrapper>
    );
  }
}

const LinkList = ({ links }) =>
  links.map(linkTitle => (
    <li key={linkTitle}>
      <a href={`#${linkTitle.toLowerCase()}`}>{linkTitle}</a>
    </li>
  ));

const DocsWrapper = styled.article`
  margin: 0 auto;
  padding: 1rem;
  max-width: 1600px;
`;

const NavWrapper = styled.menu`
  display: flex;
  overflow-x: auto;
  padding-left: 0rem;
  padding-right: 0rem;
  & > li {
    margin-right: 1rem;
    list-style-type: none;
    white-space: nowrap;
    &:last-child {
      margin-right: 0;
    }
  }
`;
