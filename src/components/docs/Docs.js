import React from "react";

// Router
import { Link } from "react-router-dom";

// Styled components
import styled from "styled-components";

// Components
import { Button, Switch, CheckBox, TextField } from "../../lib/framework";

export const Docs = () => (
  <DocsWrapper>
    <header>
      <h1>OpenSNET Bridge Client UI Framework Docs</h1>
      <nav>
        <NavWrapper>
          <li>
            <Link to="/">Back to Start</Link>
          </li>
          <li>
            <a href="#philosophy">Philosophy</a>
          </li>
          <li>
            <a href="#button">Button</a>
          </li>
          <li>
            <a href="#switch">Switch</a>
          </li>
          <li>
            <a href="#checkbox">CheckBox</a>
          </li>
          <li>
            <a href="#textfield">TextField</a>
          </li>
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
          If you have new ideas or find any issues, feel free to let us know on{" "}
          <a href="https://github.com/opensdcp/opensnet-bridge-client">
            GitHub
          </a>!
        </p>
      </section>
    </aside>
    <main>
      <section id="button">
        <h2>Button</h2>
        <details open>
          <summary>Demo</summary>
          <DemoWrapper>
            <Button value="Action" />
            <Button disabled value="Disabled action" />
          </DemoWrapper>
        </details>
        <details>
          <summary>Code</summary>
          <CodeWrapper>
            <code>
              {`<Button value="Action" />\n<Button disabled value="Disabled action" />`}
            </code>
          </CodeWrapper>
        </details>
        <details>
          <summary>Props</summary>
          <dl>
            <dt>value (required)</dt>
            <dd>The text inside the button</dd>
          </dl>
          <dl>
            <dt>disabled</dt>
            <dd>Whether the button can emmit events or not</dd>
          </dl>
        </details>
      </section>
      <section id="switch">
        <h2>Switch</h2>
        <details open>
          <summary>Demo</summary>
          <DemoWrapper>
            <Switch
              label="Stay awesome?"
              name="stayAwesome1"
              onClick={() => console.log("Clicked #1")}
            />
            <Switch
              label="Stay awesome?"
              name="stayAwesome2"
              on
              onClick={() => console.log("Clicked #2")}
            />
            <Switch
              label="Stay awesome?"
              name="stayAwesome3"
              on
              disabled
              onClick={() => console.log("You can't click me!")}
            />
          </DemoWrapper>
        </details>
        <details>
          <summary>Code</summary>
          <CodeWrapper>
            <code>
              {`<Switch
  label="Stay awesome?"
  name="stayAwesome1"
  onClick={() => console.log("Clicked #1")}
/>\n<Switch
  label="Stay awesome?"
  name="stayAwesome2"
  on
  onClick={() => console.log("Clicked #2")}
/>\n<Switch
  label="Stay awesome?"
  name="stayAwesome3"
  on
  disabled
  onClick={() => console.log("You can't click me!")}
/>`}
            </code>
          </CodeWrapper>
        </details>
        <details>
          <summary>Props</summary>
          <dl>
            <dt>label (required)</dt>
            <dd>A description of what it toggles</dd>
          </dl>
          <dl>
            <dt>name (required)</dt>
            <dd>Unique identifier</dd>
          </dl>
          <dl>
            <dt>onClick</dt>
            <dd>What to do when the switch has been clicked</dd>
          </dl>
          <dl>
            <dt>on</dt>
            <dd>Whether the switch is on or off (by default)</dd>
          </dl>
          <dl>
            <dt>disabled</dt>
            <dd>Whether the switch can be toggled</dd>
          </dl>
        </details>
      </section>
      <section id="checkbox">
        <h2>CheckBox</h2>
        <details open>
          <summary>Demo</summary>
          <DemoWrapper>
            <CheckBox
              label="Stay awesome, checkbox?"
              name="stayAwesome1CheckBox"
              onClick={() => console.log("Clicked #1")}
            />
            <CheckBox
              label="Stay awesome, checkbox?"
              name="stayAwesome2CheckBox"
              checked
              onClick={() => console.log("Clicked #2")}
            />
            <CheckBox
              label="Stay awesome, checkbox?"
              name="stayAwesome3CheckBox"
              checked
              disabled
              onClick={() => console.log("You can't click me!")}
            />
          </DemoWrapper>
        </details>
        <details>
          <summary>Code</summary>
          <CodeWrapper>
            <code>
              {`<CheckBox
  label="Stay awesome, checkbox?"
  name="stayAwesome1CheckBox"
  onClick={() => console.log("Clicked #1")}
/>\n<CheckBox
  label="Stay awesome, checkbox?"
  name="stayAwesome2CheckBox"
  checked
  onClick={() => console.log("Clicked #2")}
/>\n<CheckBox
  label="Stay awesome, checkbox?"
  name="stayAwesome3CheckBox"
  checked
  disabled
  onClick={() => console.log("You can't click me!")}
/>`}
            </code>
          </CodeWrapper>
        </details>
        <details>
          <summary>Props</summary>
          <dl>
            <dt>label (required)</dt>
            <dd>A description of what it toggles</dd>
          </dl>
          <dl>
            <dt>name (required)</dt>
            <dd>Unique identifier</dd>
          </dl>
          <dl>
            <dt>onClick</dt>
            <dd>What to do when the checkbox has been clicked</dd>
          </dl>
          <dl>
            <dt>checked</dt>
            <dd>Whether the checkbox is checked (by default)</dd>
          </dl>
          <dl>
            <dt>disabled</dt>
            <dd>Whether the checkbox can be toggled</dd>
          </dl>
        </details>
      </section>
      <section id="textfield">
        <h2>TextField</h2>
        <details open>
          <summary>Demo</summary>
          <DemoWrapper>
            <TextField
              type="text"
              label="Your username:"
              name="userName"
              placeholder="A nice and short username"
              value=""
              onInput={() => console.log("Entered something in TextField!")}
            />
            <TextField
              type="password"
              label="Your password:"
              name="password"
              value="You can't read nor change me!"
              disabled
              onInput={() => console.log("You can't change this TextField!")}
            />
          </DemoWrapper>
        </details>
        <details>
          <summary>Code</summary>
          <CodeWrapper>
            <code>
              {`<TextField
  type="text"
  label="Your username:"
  name="userName"
  <dl>
    <dt>checked</dt>
    <dd>Whether the checkbox is checked (by default)</dd>
  </dl>
  placeholder="A nice and short username"
  value=""
  onInput={() => console.log("Entered something in TextField!")}
/>
<TextField
  type="password"
  label="Your password:"
  name="password"
  value="You can't read nor change me!"
  disabled
  onInput={() => console.log("You can't change this TextField!")}
/>`}
            </code>
          </CodeWrapper>
        </details>
        <details>
          <summary>Props</summary>
          <dl>
            <dt>type (required)</dt>
            <dd>
              Type of the input (i.e. {'"password"'} or {'"text"'})
            </dd>
          </dl>
          <dl>
            <dt>label</dt>
            <dd>A description of what information to enter</dd>
          </dl>
          <dl>
            <dt>name (required)</dt>
            <dd>Unique identifier</dd>
          </dl>
          <dl>
            <dt>value (required)</dt>
            <dd>Text in the TextField</dd>
          </dl>
          <dl>
            <dt>onInput (required)</dt>
            <dd>What to do when text has been entered</dd>
          </dl>
          <dl>
            <dt>disabled</dt>
            <dd>Whether the checkbox can be toggled</dd>
          </dl>
        </details>
      </section>
    </main>
  </DocsWrapper>
);

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

const DemoWrapper = styled.div`
  padding: 1rem 0;
  & > * {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const CodeWrapper = styled.pre`
  overflow-x: auto;
`;
