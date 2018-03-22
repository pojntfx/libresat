import React, { Component, Fragment } from "react";
import { List } from "../List";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

// Styled components
import styled from "styled-components";

// Components
import { Button } from "../../button/Button";

export const ListDocs = () => (
  <DocsSection
    title="List"
    id="list"
    demos={<ListDemo />}
    code={code}
    api={[
      {
        title: "title (optional) (string)",
        description: "Title of the List"
      },
      {
        title: "items (node[])",
        description: "Items in the List"
      }
    ]}
  />
);

const code = `
class ListDemo extends Component {
    PersonComponent = styled.div\`
      display: flex;
      justify-content: space-between;
      align-items: center;
    \`;
  
    PersonActions = styled.div\`
      margin-left: 1rem;
    \`;
  
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
      const {
        PersonComponent,
        PersonActions,
        onAddPerson,
        onRemovePerson,
        onShareDetails
      } = this;
  
      return (
        <List
          title="Manage users"
          items={[
            <Fragment key="instanceControl">
              <PersonComponent>
                First person
                <PersonActions>
                  <Button value="+ Add person" onClick={onAddPerson} />
                  <Button value="- Remove person" onClick={onRemovePerson} />
                  <Button value="> Share details" onClick={onShareDetails} />
                </PersonActions>
              </PersonComponent>
              <PersonComponent>
                Second person
                <PersonActions>
                  <Button value="+ Add person" onClick={onAddPerson} />
                  <Button value="- Remove person" onClick={onRemovePerson} />
                  <Button value="> Share details" onClick={onShareDetails} />
                </PersonActions>
              </PersonComponent>
              <PersonComponent>
                Third person
                <PersonActions>
                  <Button value="+ Add person" onClick={onAddPerson} />
                  <Button value="- Remove person" onClick={onRemovePerson} />
                  <Button value="> Share details" onClick={onShareDetails} />
                </PersonActions>
              </PersonComponent>
            </Fragment>
          ]}
        />
      );
    }
  }
`;

class ListDemo extends Component {
  PersonComponent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  PersonActions = styled.div`
    margin-left: 1rem;
  `;

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
    const {
      PersonComponent,
      PersonActions,
      onAddPerson,
      onRemovePerson,
      onShareDetails
    } = this;

    return (
      <List
        title="Manage users"
        items={[
          <Fragment key="instanceControl">
            <PersonComponent>
              First person
              <PersonActions>
                <Button value="+ Add person" onClick={onAddPerson} />
                <Button value="- Remove person" onClick={onRemovePerson} />
                <Button value="> Share details" onClick={onShareDetails} />
              </PersonActions>
            </PersonComponent>
            <PersonComponent>
              Second person
              <PersonActions>
                <Button value="+ Add person" onClick={onAddPerson} />
                <Button value="- Remove person" onClick={onRemovePerson} />
                <Button value="> Share details" onClick={onShareDetails} />
              </PersonActions>
            </PersonComponent>
            <PersonComponent>
              Third person
              <PersonActions>
                <Button value="+ Add person" onClick={onAddPerson} />
                <Button value="- Remove person" onClick={onRemovePerson} />
                <Button value="> Share details" onClick={onShareDetails} />
              </PersonActions>
            </PersonComponent>
          </Fragment>
        ]}
      />
    );
  }
}
