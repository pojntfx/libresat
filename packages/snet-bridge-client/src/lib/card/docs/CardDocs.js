import React, { Component } from "react";
import { Card } from "../Card";
import styled from "styled-components";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

// Components
import { Button } from "../../button/Button";
import { Tool } from "../../tool/Tool";

export const CardDocs = () => (
  <DocsSection
    title="Card"
    id="card"
    code={code}
    scope={scope}
    api={[
      {
        title: "header (optional) (node[])",
        description: "Items in the header of the card."
      },
      {
        title: "media (optional) (node[])",
        description: "Media (Images, Videos) of the card."
      },
      {
        title: "children (optional) (node[] || string)",
        description: "Items in the main area of the card."
      },
      {
        title: "footer (optional) (node[])",
        description: "Items in the footer of the card."
      },
      {
        title: "...otherProps",
        description: "Other props that should be passed to the card."
      }
    ]}
  />
);

const scope = { styled, Card, Button, Tool, Component };

const code = `class CardDemo extends Component {
  onOptions() {
    console.log("Opening options.");
  }

  onLike() {
    console.log("Liking.");
  }

  onBookmark() {
    console.log("Bookmarking.");
  }

  onShare() {
    console.log("Sharing.");
  }

  onComment() {
    console.log("Commenting.");
  }

  render() {
    const { onOptions, onLike, onBookmark, onShare, onComment } = this;

    return (
      <Card
        header={[
          <Tool key="1" divided>
            <span>Corsica</span>
            <Button value="Options" onClick={onOptions} />
          </Tool>
        ]}
        media={
          <img
            src="https://www.zoggs.com/wp/wp-content/uploads/2016/07/Palombaggia-beach.jpg"
            alt="beach on corsica"
            style={{
              maxHeight: "360px",
              objectFit: "cover",
              width: "100%"
            }}
          />
        }
        footer={[
          <Tool key="1" divided>
            <Tool>
              <Button value="Like" onClick={onLike} />
              <Button value="Bookmark" onClick={onBookmark} />
              <Button value="Share" onClick={onShare} />
            </Tool>
            <Button value="Comment" onClick={onComment} />
          </Tool>
        ]}
      >
        <span>
          Jutting out of the Med like an impregnable fortress, Corsica resembles
          a miniature continent, with astounding geographical diversity. Within
          half an hour, the landscape morphs from glittering bays, glitzy
          coastal cities and fabulous beaches to sawtooth peaks, breathtaking
          valleys, dense forests and enigmatic hilltop villages. Holidays in
          Corsica will therefore be incredibly varied: from hiking and canyoning
          to working your tan, enjoying a leisurely cruise, delving into the
          island’s rich history and sampling local specialities.
        </span>
      </Card>
    );
  }
}`;

// eslint-disable-next-line no-unused-vars
class CardDemo extends Component {
  onOptions() {
    console.log("Opening options.");
  }

  onLike() {
    console.log("Liking.");
  }

  onBookmark() {
    console.log("Bookmarking.");
  }

  onShare() {
    console.log("Sharing.");
  }

  onComment() {
    console.log("Commenting.");
  }

  render() {
    const { onOptions, onLike, onBookmark, onShare, onComment } = this;

    return (
      <Card
        header={[
          <Tool key="1" divided>
            <span>Corsica</span>
            <Button value="Options" onClick={onOptions} />
          </Tool>
        ]}
        media={
          <img
            src="https://www.zoggs.com/wp/wp-content/uploads/2016/07/Palombaggia-beach.jpg"
            alt="beach on corsica"
            style={{
              maxHeight: "360px",
              objectFit: "cover",
              width: "100%"
            }}
          />
        }
        footer={[
          <Tool key="1" divided>
            <Tool>
              <Button value="Like" onClick={onLike} />
              <Button value="Bookmark" onClick={onBookmark} />
              <Button value="Share" onClick={onShare} />
            </Tool>
            <Button value="Comment" onClick={onComment} />
          </Tool>
        ]}
      >
        <span>
          Jutting out of the Med like an impregnable fortress, Corsica resembles
          a miniature continent, with astounding geographical diversity. Within
          half an hour, the landscape morphs from glittering bays, glitzy
          coastal cities and fabulous beaches to sawtooth peaks, breathtaking
          valleys, dense forests and enigmatic hilltop villages. Holidays in
          Corsica will therefore be incredibly varied: from hiking and canyoning
          to working your tan, enjoying a leisurely cruise, delving into the
          island’s rich history and sampling local specialities.
        </span>
      </Card>
    );
  }
}
