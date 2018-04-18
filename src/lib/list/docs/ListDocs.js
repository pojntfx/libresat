import React, { Component } from "react";
import { List } from "../List";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

// Components
import { Button } from "../../button/Button";
import { Tool } from "../../tool/Tool";

export const ListDocs = () => (
  <DocsSection
    title="List"
    id="list"
    code={code}
    scope={scope}
    api={[
      {
        title: "title (optional) (string)",
        description: "Title of the List."
      },
      {
        title: "children (node[])",
        description: "Items in the List."
      },
      {
        title: "...otherProps",
        description: "Other props that should be passed to the GridLayout."
      }
    ]}
  />
);

const scope = { List, Tool, Button, Component };

const code = `class ListDemo extends Component {
  onAddPerson() {
    console.log("Adding person.");
  }

  onRemovePerson() {
    console.log("Removing person.");
  }

  onShareDetails() {
    console.log("Sharing details.");
  }

  render() {
    const { onAddPerson, onRemovePerson, onShareDetails } = this;

    return (
      <List title="Manage users">
        <Tool divided key="1">
          <span>First Person</span>
          <Tool>
            <Button
              context="positive"
              value="+ Add person"
              onClick={onAddPerson}
            />
            <Button
              context="negative"
              value="- Remove person"
              onClick={onRemovePerson}
            />
            <Button value="> Share details" onClick={onShareDetails} />
          </Tool>
        </Tool>
        <Tool divided key="2">
          <span>Second Person</span>
          <Tool>
            <Button
              context="positive"
              value="+ Add person"
              onClick={onAddPerson}
            />
            <Button
              context="negative"
              value="- Remove person"
              onClick={onRemovePerson}
            />
            <Button value="> Share details" onClick={onShareDetails} />
          </Tool>
        </Tool>
        <Tool divided key="3">
          <span>Third Person</span>
          <Tool>
            <Button
              context="positive"
              value="+ Add person"
              onClick={onAddPerson}
            />
            <Button
              context="negative"
              value="- Remove person"
              onClick={onRemovePerson}
            />
            <Button value="> Share details" onClick={onShareDetails} />
          </Tool>
        </Tool>
      </List>
    );
  }
}`;

// eslint-disable-next-line no-unused-vars
class ListDemo extends Component {
  onAddPerson() {
    console.log("Adding person.");
  }

  onRemovePerson() {
    console.log("Removing person.");
  }

  onShareDetails() {
    console.log("Sharing details.");
  }

  render() {
    const { onAddPerson, onRemovePerson, onShareDetails } = this;

    return (
      <List title="Manage users">
        <Tool divided key="1">
          <span>First Person</span>
          <Tool>
            <Button
              context="positive"
              value="+ Add person"
              onClick={onAddPerson}
            />
            <Button
              context="negative"
              value="- Remove person"
              onClick={onRemovePerson}
            />
            <Button value="> Share details" onClick={onShareDetails} />
          </Tool>
        </Tool>
        <Tool divided key="2">
          <span>Second Person</span>
          <Tool>
            <Button
              context="positive"
              value="+ Add person"
              onClick={onAddPerson}
            />
            <Button
              context="negative"
              value="- Remove person"
              onClick={onRemovePerson}
            />
            <Button value="> Share details" onClick={onShareDetails} />
          </Tool>
        </Tool>
        <Tool divided key="3">
          <span>Third Person</span>
          <Tool>
            <Button
              context="positive"
              value="+ Add person"
              onClick={onAddPerson}
            />
            <Button
              context="negative"
              value="- Remove person"
              onClick={onRemovePerson}
            />
            <Button value="> Share details" onClick={onShareDetails} />
          </Tool>
        </Tool>
      </List>
    );
  }
}
