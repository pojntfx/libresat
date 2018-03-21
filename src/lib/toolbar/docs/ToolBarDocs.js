import React, { Component, Fragment } from "react";
import { ToolBar } from "../ToolBar";
import { Button } from "../../button/Button";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const ToolBarDocs = () => (
  <DocsSection
    title="ToolBar"
    id="toolbar"
    demos={<ToolBarDemo />}
    code={code}
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
      }
    ]}
  />
);

const code = `
class ToolBarDemo extends Component {
  onOpenFile = () => {
    console.log("Opening file.");
  };

  onOpenFolder = () => {
    console.log("Opening folder.");
  };

  onSaveFile = () => {
    console.log("Saving file.");
  };

  onStageFolder = () => {
    console.log("Staging folder.");
  };

  onAddPost = () => {
    console.log("Adding post.");
  };

  onShareView = () => {
    console.log("Sharing view.");
  };

  onInviteFriend = () => {
    console.log("Inviting friend.");
  };

  onDistributeInfo = () => {
    console.log("Distributing info.");
  };

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
            <Fragment key="leftItems">
              <Button value="Open file" onClick={onOpenFile} />
              <Button value="Open folder" onClick={onOpenFolder} />
            </Fragment>
          ]}
          rightItems={[
            <Fragment key="rightItems">
              <Button value="Save file" onClick={onSaveFile} />
              <Button value="Stage folder" onClick={onStageFolder} />
            </Fragment>
          ]}
        />
        {/* Equal layout */}
        <ToolBar
          equalItems={[
            <Fragment key="equalItems">
              <Button value="Add post" onClick={onAddPost} />
              <Button value="Share view" onClick={onShareView} />
              <Button value="Invite friend" onClick={onInviteFriend} />
              <Button value="Distribute info" onClick={onDistributeInfo} />
            </Fragment>
          ]}
        />
      </Fragment>
    );
  }
}
`;

class ToolBarDemo extends Component {
  onOpenFile = () => {
    console.log("Opening file.");
  };

  onOpenFolder = () => {
    console.log("Opening folder.");
  };

  onSaveFile = () => {
    console.log("Saving file.");
  };

  onStageFolder = () => {
    console.log("Staging folder.");
  };

  onAddPost = () => {
    console.log("Adding post.");
  };

  onShareView = () => {
    console.log("Sharing view.");
  };

  onInviteFriend = () => {
    console.log("Inviting friend.");
  };

  onDistributeInfo = () => {
    console.log("Distributing info.");
  };

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
            <Fragment key="leftItems">
              <Button value="Open file" onClick={onOpenFile} />
              <Button value="Open folder" onClick={onOpenFolder} />
            </Fragment>
          ]}
          rightItems={[
            <Fragment key="rightItems">
              <Button value="Save file" onClick={onSaveFile} />
              <Button value="Stage folder" onClick={onStageFolder} />
            </Fragment>
          ]}
        />
        {/* Equal layout */}
        <ToolBar
          equalItems={[
            <Fragment key="equalItems">
              <Button value="Add post" onClick={onAddPost} />
              <Button value="Share view" onClick={onShareView} />
              <Button value="Invite friend" onClick={onInviteFriend} />
              <Button value="Distribute info" onClick={onDistributeInfo} />
            </Fragment>
          ]}
        />
      </Fragment>
    );
  }
}
