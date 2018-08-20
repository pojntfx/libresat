import React, { Component, Fragment } from "react";

// Router
import { Link } from "react-router-dom";

// Styled components
import styled from "styled-components";

// Components
import {
  NavBar,
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
  ListDocs,
  MenuDocs,
  CardDocs,
  DialogDocs,
  ContainerDocs,
  LoadingDocs,
  GridLayoutDocs,
  NavDocs,
  ToolDocs,
  ExpandDocs
} from "../../lib/framework";

export class Docs extends Component {
  render() {
    return (
      <Fragment>
        <MainNavigation
          title="OpenSNET Bridge Client UI Framework Docs"
          links={[
            <Link key="1" to="/">
              Back to Start
            </Link>,
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
                "TabBar",
                "Nav",
                "NavBar",
                "Tool",
                "ToolBar",
                "List",
                "Menu",
                "Expand",
                "Card",
                "Dialog",
                "Container",
                "Loading",
                "GridLayout"
              ]}
              key="1"
            />
          ]}
        />
        <DocsWrapper>
          <aside>
            <section id="philosophy">
              <h2>Philosophy</h2>
              <p>
                This framework is highly opinionated and has minimal styling.
              </p>
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
                If you have new ideas or spot any issues, feel free to let us
                know on{" "}
                <a href="https://github.com/opensdcp/opensnet-bridge-client/issues">
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
            <TabBarDocs />
            <NavDocs />
            <NavBarDocs />
            <ToolDocs />
            <ToolBarDocs />
            <ListDocs />
            <MenuDocs />
            <ExpandDocs />
            <CardDocs />
            <DialogDocs />
            <ContainerDocs />
            <LoadingDocs />
            <GridLayoutDocs />
          </main>
        </DocsWrapper>
      </Fragment>
    );
  }
}

const MainNavigation = styled(NavBar)`
  & > nav > ul {
    > li:not(:first-child) {
      > a:not(:last-child) {
        margin-right: ${({ theme: { margins } }) => margins.default};
      }
    }
    > li:first-child > a {
      margin: 0 ${({ theme: { margins } }) => margins.default};
    }
    > li:last-child {
      margin-right: 0;
    }
  }
`;

const LinkList = ({ links }) =>
  links.map((linkTitle, index) => (
    <a href={`#${linkTitle.toLowerCase()}`} key={index}>
      {linkTitle}
    </a>
  ));

const DocsWrapper = styled.article`
  margin: 0 auto;
  padding: 1rem;
  max-width: 1280px;
`;
