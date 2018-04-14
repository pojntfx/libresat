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
    demos={<ListDemo />}
    code={code}
    api={[
      {
        title: "title (optional) (string)",
        description: "Title of the List."
      },
      {
        title: "items (node[])",
        description: "Items in the List."
      }
    ]}
  />
);

const code = `
class ListDemo extends Component {
  onAddPerson = () => {
    console.log("Adding person.");
  };

  onRemovePerson = () => {
    console.log("Removing person.");
  };

  onShareDetails = () => {
    console.log("Sharing details.");
  };

  render() {
    const { onAddPerson, onRemovePerson, onShareDetails } = this;

    return (
      <List
        title="Manage users"
        items={[
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
          </Tool>,
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
          </Tool>,
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
        ]}
      />
    );
  }
}
`;

class ListDemo extends Component {
  onAddPerson = () => {
    console.log("Adding person.");
  };

  onRemovePerson = () => {
    console.log("Removing person.");
  };

  onShareDetails = () => {
    console.log("Sharing details.");
  };

  render() {
    const { onAddPerson, onRemovePerson, onShareDetails } = this;

    return (
      <List
        title="Manage users"
        items={[
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
          </Tool>,
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
          </Tool>,
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
        ]}
      />
    );
  }
}
