import React, { Component } from "react";

// Router
import { Link } from "react-router-dom";

// Styled components
import styled from "styled-components";

// Components
import {
  Button,
  Switch,
  CheckBox,
  TextField,
  TextArea,
  Select,
  Option,
  Slider,
  Tab
} from "../../lib/framework";

export class Docs extends Component {
  state = {
    activePaneIndex: 0
  };

  onTabChange = activePaneIndex => {
    this.setState({
      activePaneIndex
    });
  };
  render() {
    const { onTabChange } = this;
    const { activePaneIndex } = this.state;

    return (
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
              <li>
                <a href="#textarea">TextArea</a>
              </li>
              <li>
                <a href="#select">Select</a>
              </li>
              <li>
                <a href="#slider">Slider</a>
              </li>
              <li>
                <a href="#tabs">Tabs</a>
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
              If you have new ideas or find any issues, feel free to let us know
              on{" "}
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
                  onInput={() =>
                    console.log("You can't change this TextField!")
                  }
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
                <dd>Whether the TextField{"'"}s value can be changed</dd>
              </dl>
            </details>
          </section>
          <section id="textarea">
            <h2>TextArea</h2>
            <details open>
              <summary>Demo</summary>
              <DemoWrapper>
                <TextArea
                  label="Your bio:"
                  name="userDescription"
                  placeholder="A nice and short bio"
                  value=""
                  onInput={() => console.log("Entered something in TextArea!")}
                />
                <TextArea
                  label="Your bio:"
                  name="privateUserDescription"
                  value="You can't change me!"
                  disabled
                  onInput={() => console.log("You can't change this TextArea!")}
                />
              </DemoWrapper>
            </details>
            <details>
              <summary>Code</summary>
              <CodeWrapper>
                <code>
                  {`<TextArea
label="Your bio:"
name="userDescription"
placeholder="A nice and short bio"
value=""
onInput={() => console.log("Entered something in TextArea!")}
/>
<TextArea
label="Your bio:"
name="privateUserDescription"
value="You can't change me!"
disabled
onInput={() => console.log("You can't change this TextArea!")}
/>`}
                </code>
              </CodeWrapper>
            </details>
            <details>
              <summary>Props</summary>
              <dl>
                <dt>label</dt>
                <dd>A description of what information to enter</dd>
                <dt>name (required)</dt>
                <dd>Unique identifier</dd>
                <dt>value (required)</dt>
                <dd>Text in the TextField</dd>
                <dt>onInput (required)</dt>
                <dd>What to do when text has been entered</dd>
                <dt>disabled</dt>
                <dd>Whether the TextArea{"'"}s content can be changed</dd>
              </dl>
            </details>
          </section>
          <section id="select">
            <h2>Select</h2>
            <details open>
              <summary>Demo</summary>
              <DemoWrapper>
                <Select
                  label="Your timezone:"
                  name="timeZone"
                  onInput={({ target: { value } }) =>
                    console.log("Selected:", value)
                  }
                  value="CET"
                >
                  <Option
                    value="UTC"
                    text="UTC"
                    onClick={() => console.log("Selected UTC!")}
                  />
                  <Option
                    value="CET"
                    text="CET"
                    onClick={() => console.log("Selected CET!")}
                  />
                </Select>
                <Select
                  label="Your timezone:"
                  name="timeZone"
                  onInput={({ target: { value } }) =>
                    console.log("Selected:", value)
                  }
                  value="CET"
                  disabled
                >
                  <Option
                    value="UTC"
                    text="UTC"
                    onClick={() => console.log("Selected UTC!")}
                  />
                  <Option
                    value="CET"
                    text="CET"
                    onClick={() => console.log("Selected CET!")}
                  />
                </Select>
              </DemoWrapper>
            </details>
            <details>
              <summary>Code</summary>
              <CodeWrapper>
                <code>
                  {`<Select
label="Your timezone:"
name="timeZone"
onInput={({ target: { value } }) =>
  console.log("Selected:", value)
}
value="CET"
>
<Option
  value="UTC"
  text="UTC"
  onClick={() => console.log("Selected UTC!")}
/>
<Option
  value="CET"
  text="CET"
  onClick={() => console.log("Selected CET!")}
/>
</Select>
<Select
label="Your timezone:"
name="timeZone"
onInput={({ target: { value } }) =>
  console.log("Selected:", value)
}
value="CET"
disabled
>
<Option
  value="UTC"
  text="UTC"
  onClick={() => console.log("Selected UTC!")}
/>
<Option
  value="CET"
  text="CET"
  onClick={() => console.log("Selected CET!")}
/>
</Select>`}
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
                <dd>What to do when an option has been selected</dd>
              </dl>
              <dl>
                <dt>disabled</dt>
                <dd>Whether the selection can be changed</dd>
              </dl>
            </details>
          </section>
          <section id="slider">
            <h2>Slider</h2>
            <details open>
              <summary>Demo</summary>
              <DemoWrapper>
                <Slider
                  name="itemAmount1"
                  label="Amount of items"
                  onChange={({ target: { value } }) =>
                    console.log("Selected:", value)
                  }
                  value={50}
                  min="0"
                  max="100"
                  step="10"
                />
                <Slider
                  label="Amount of items"
                  name="itemAmount2"
                  onChange={({ target: { value } }) =>
                    console.log("Selected:", value)
                  }
                  value={30}
                  min="0"
                  max="100"
                  step="10"
                  disabled
                />
              </DemoWrapper>
            </details>
            <details>
              <summary>Code</summary>
              <CodeWrapper>
                <code>
                  {`<Slider
label="Amount of items"
name="timeZone"
onChange={({ target: { value } }) =>
  console.log("Selected:", value)
}
value={50}
min="0"
max="100"
step="10"
/>
<Slider
label="Amount of items"
name="timeZone"
onChange={({ target: { value } }) =>
  console.log("Selected:", value)
}
value={30}
min="0"
max="100"
step="10"
disabled
/>`}
                </code>
              </CodeWrapper>
            </details>
            <details>
              <summary>Props</summary>
              <dl>
                <dt>label</dt>
                <dd>A description of what information to enter</dd>
                <dt>name (required)</dt>
                <dd>Unique identifier</dd>
                <dt>value (required)</dt>
                <dd>Value of the slider</dd>
                <dt>onChange (required)</dt>
                <dd>What to do when the slider has been used</dd>
                <dt>disabled</dt>
                <dd>Whether the slider{"'"}s value can be changed</dd>
              </dl>
            </details>
          </section>
          <section id="tabs">
            <h2>Tabs</h2>
            <details open>
              <summary>Demo</summary>
              <DemoWrapper>
                <Tab
                  links={[
                    "First tab",
                    "Second tab",
                    "Third tab",
                    "Fourth tab",
                    "Fifth tab"
                  ]}
                  panes={[
                    <div key="first">a</div>,
                    <div key="second">b</div>,
                    <div key="third">c</div>,
                    <div key="fourth">d</div>,
                    <div key="fifth">e</div>
                  ]}
                  onChange={id => onTabChange(id)}
                  activePane={activePaneIndex}
                />
                <Tab
                  links={[
                    "First tab #2",
                    "Second tab #2",
                    "Third tab #2",
                    "Fourth tab #2",
                    "Fifth tab #2"
                  ]}
                  panes={[
                    <div key="first">a</div>,
                    <div key="second">b</div>,
                    <div key="third">c</div>,
                    <div key="fourth">d</div>,
                    <div key="fifth">e</div>
                  ]}
                  onChange={id => onTabChange(id)}
                  activePane={2}
                  disabled
                />
              </DemoWrapper>
            </details>
            <details>
              <summary>Code</summary>
              <CodeWrapper>
                <code>
                  {`<Tab
links={[
  "First tab",
  "Second tab",
  "Third tab",
  "Fourth tab",
  "Fifth tab"
]}
panes={[
  <div key="first">a</div>,
  <div key="second">b</div>,
  <div key="third">c</div>,
  <div key="fourth">d</div>,
  <div key="fifth">e</div>
]}
onChange={id => onTabChange(id)}
activePane={activePaneIndex}
/>
<Tab
links={[
  "First tab #2",
  "Second tab #2",
  "Third tab #2",
  "Fourth tab #2",
  "Fifth tab #2"
]}
panes={[
  <div key="first">a</div>,
  <div key="second">b</div>,
  <div key="third">c</div>,
  <div key="fourth">d</div>,
  <div key="fifth">e</div>
]}
onChange={id => onTabChange(id)}
activePane={2}
disabled
/>`}
                </code>
              </CodeWrapper>
            </details>
            <details>
              <summary>Props</summary>
              <dl>
                <dt>links</dt>
                <dd>A string[] with the tab headers</dd>
                <dt>panes</dt>
                <dd>A node[] with the pane components</dd>
                <dt>onChange (required)</dt>
                <dd>
                  What to do when a tab has been clicked (returns the button{`'`}s
                  id)
                </dd>
                <dt>activePane</dt>
                <dd>The currently active pane{`'`}s index</dd>
                <dt>disabled</dt>
                <dd>Whether activePane can be changed</dd>
              </dl>
            </details>
          </section>
        </main>
      </DocsWrapper>
    );
  }
}

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
