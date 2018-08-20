import React, { Component, Fragment } from "react";
import { ToolBar } from "../ToolBar";
import { Button } from "../../button/Button";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const ToolBarDocs = () => (
  <DocsSection
    title="ToolBar"
    id="toolbar"
    code={code}
    scope={scope}
    api={[
      {
        title: "title (string || node)",
        description: "Title/brand of the page."
      },
      {
        title: "leftItems (node[])",
        description: "Items on the left side."
      },
      {
        title: "equalItems (node[])",
        description:
          "Equally distributed items. No leftItems/title/rightItems will be rendered if used."
      },
      {
        title: "rightItems (node[])",
        description: "Items on the right side."
      },
      {
        title: "...otherProps",
        description: "Other props that should be passed to the ToolBar."
      }
    ]}
  />
);

const scope = { Fragment, ToolBar, Button, Component };

const code = `class ToolBarDemo extends Component {
  onOpenFile() {
    console.log("Opening file.");
  }

  onOpenFolder() {
    console.log("Opening folder.");
  }

  onSaveFile() {
    console.log("Saving file.");
  }

  onStageFolder() {
    console.log("Staging folder.");
  }

  onAddPost() {
    console.log("Adding post.");
  }

  onShareView() {
    console.log("Sharing view.");
  }

  onInviteFriend() {
    console.log("Inviting friend.");
  }

  onDistributeInfo() {
    console.log("Distributing info.");
  }

  render() {
    const {
      onOpenFile,
      onOpenFolder,
      onSaveFile,
      onStageFolder,
      onAddPost,
      onShareView,
      onInviteFriend,
      onDistributeInfo
    } = this;

    return (
      <Fragment>
        {/* Divided layout */}
        <ToolBar
          title="Edit project"
          leftItems={[
            <Button value="Open file" onClick={onOpenFile} key="1" />,
            <Button value="Open folder" onClick={onOpenFolder} key="2" />
          ]}
          rightItems={[
            <Button value="Save file" onClick={onSaveFile} key="1" />,
            <Button value="Stage folder" onClick={onStageFolder} key="2" />
          ]}
          style={{ marginBottom: "1rem" }}
        />
        {/* Equal layout */}
        <ToolBar
          equalItems={[
            <Button key="1" value="Add post" onClick={onAddPost} />,
            <Button key="2" value="Share view" onClick={onShareView} />,
            <Button key="3" value="Invite friend" onClick={onInviteFriend} />,
            <Button
              key="4"
              value="Distribute info"
              onClick={onDistributeInfo}
            />
          ]}
        />
      </Fragment>
    );
  }
}`;

// eslint-disable-next-line no-unused-vars
class ToolBarDemo extends Component {
  onOpenFile() {
    console.log("Opening file.");
  }

  onOpenFolder() {
    console.log("Opening folder.");
  }

  onSaveFile() {
    console.log("Saving file.");
  }

  onStageFolder() {
    console.log("Staging folder.");
  }

  onAddPost() {
    console.log("Adding post.");
  }

  onShareView() {
    console.log("Sharing view.");
  }

  onInviteFriend() {
    console.log("Inviting friend.");
  }

  onDistributeInfo() {
    console.log("Distributing info.");
  }

  render() {
    const {
      onOpenFile,
      onOpenFolder,
      onSaveFile,
      onStageFolder,
      onAddPost,
      onShareView,
      onInviteFriend,
      onDistributeInfo
    } = this;

    return (
      <Fragment>
        {/* Divided layout */}
        <ToolBar
          title="Edit project"
          leftItems={[
            <Button value="Open file" onClick={onOpenFile} key="1" />,
            <Button value="Open folder" onClick={onOpenFolder} key="2" />
          ]}
          rightItems={[
            <Button value="Save file" onClick={onSaveFile} key="1" />,
            <Button value="Stage folder" onClick={onStageFolder} key="2" />
          ]}
          style={{ marginBottom: "1rem" }}
        />
        {/* Equal layout */}
        <ToolBar
          equalItems={[
            <Button key="1" value="Add post" onClick={onAddPost} />,
            <Button key="2" value="Share view" onClick={onShareView} />,
            <Button key="3" value="Invite friend" onClick={onInviteFriend} />,
            <Button
              key="4"
              value="Distribute info"
              onClick={onDistributeInfo}
            />
          ]}
        />
      </Fragment>
    );
  }
}
