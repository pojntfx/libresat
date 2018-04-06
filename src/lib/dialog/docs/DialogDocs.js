import React, { Component, Fragment } from "react";
import { Dialog } from "../Dialog";
import { Button } from "../../button/Button";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

export const DialogDocs = () => (
  <DocsSection
    title="Dialog"
    id="dialog"
    demos={<DialogDemo />}
    code={code}
    api={[
      {
        title: "title (optional) (string)",
        description: "Title of the dialog."
      },
      {
        title: "leftLabel (optional) (string)",
        description: "Text of the button on the top left of the dialog."
      },
      {
        title: "onLeftLabelClick (optional) (func)",
        description:
          "Event handler (gets fired when the user clicks the left button)."
      },
      {
        title: "rightLabel (optional) (string)",
        description: "Text of the button on the top right of the dialog."
      },
      {
        title: "onRightLabelClick (optional) (func)",
        description:
          "Event handler (gets fired when the user clicks the right button)."
      },
      {
        title: "body (optional) (node[])",
        description: "Items in the main area of the Dialog."
      },
      {
        title: "active (optional) (bool)",
        description: "Whether the dialog is open or not."
      },
      {
        title: "fullscreen (optional) (bool)",
        description: "Whether the dialog fills the whole screen or not."
      },
      {
        title: "...otherProps",
        description: "Other (HTML5) props that should be passed to the dialog."
      }
    ]}
  />
);

const code = `
class DialogDemo extends Component {
  state = {
    dialogIsActive: false
  };

  onUploadDialog = () => {
    this.setState({
      dialogIsActive: true
    });
  };

  onCancel = () => {
    console.log("Canceling.");
    this.setState({
      dialogIsActive: false
    });
  };

  onUpload = () => {
    this.upload();
    this.setState({
      dialogIsActive: false
    });
  };

  upload = () => {
    console.log("Uploading.");
  };

  render() {
    const { onUploadDialog, onCancel, onUpload } = this;
    const { dialogIsActive } = this.state;

    return (
      <Fragment>
        <Button value="Upload" onClick={onUploadDialog} />
        <Dialog
          title="Really upload this image?"
          leftLabel="Cancel"
          onLeftLabelClick={onCancel}
          rightLabel="Upload"
          onRightLabelClick={onUpload}
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatibus possimus optio, porro culpa voluptatum deleniti ipsum ipsa est quis maiores nisi accusantium fugiat vero qui commodi. Autem libero quas maxime consequatur tempora consequuntur cumque repudiandae at mollitia tempore, quaerat id dolorem exercitationem nihil accusantium rerum sunt assumenda enim sapiente?"
          active={dialogIsActive}
          fullscreen={true}
        />
      </Fragment>
    );
  }
}
  `;

class DialogDemo extends Component {
  state = {
    dialogIsActive: false
  };

  onUploadDialog = () => {
    this.setState({
      dialogIsActive: true
    });
  };

  onCancel = () => {
    console.log("Canceling.");
    this.setState({
      dialogIsActive: false
    });
  };

  onUpload = () => {
    this.upload();
    this.setState({
      dialogIsActive: false
    });
  };

  upload = () => {
    console.log("Uploading.");
  };

  render() {
    const { onUploadDialog, onCancel, onUpload } = this;
    const { dialogIsActive } = this.state;

    return (
      <Fragment>
        <Button value="Upload" onClick={onUploadDialog} />
        <Dialog
          title="Really upload this image?"
          leftLabel="Cancel"
          onLeftLabelClick={onCancel}
          rightLabel="Upload"
          onRightLabelClick={onUpload}
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatibus possimus optio, porro culpa voluptatum deleniti ipsum ipsa est quis maiores nisi accusantium fugiat vero qui commodi. Autem libero quas maxime consequatur tempora consequuntur cumque repudiandae at mollitia tempore, quaerat id dolorem exercitationem nihil accusantium rerum sunt assumenda enim sapiente?"
          active={dialogIsActive}
          fullscreen={true}
        />
      </Fragment>
    );
  }
}
