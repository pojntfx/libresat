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
    demos={<CardDemo />}
    code={code}
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
        title: "body (optional) (node[])",
        description: "Items in the main area of the card."
      },
      {
        title: "footer (optional) (node[])",
        description: "Items in the footer of the card."
      }
    ]}
  />
);

const code = `
class CardDemo extends Component {
  CardImage = styled.img\`
    max-height: 360px;
    object-fit: cover;
    width: 100%;
  \`;

  onLike = () => console.log("Liking.");

  onBookmark = () => console.log("Bookmarking.");

  onShare = () => console.log("Sharing.");

  onComment = () => console.log("Commenting.");

  render() {
    const { CardImage, onLike, onBookmark, onShare, onComment } = this;

    return (
      <Card
        header="Corsica"
        media={
          <CardImage
            src="https://www.zoggs.com/wp/wp-content/uploads/2016/07/Palombaggia-beach.jpg"
            alt="beach on corsica"
          />
        }
        body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora."
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
      />
    );
  }
}
`;

class CardDemo extends Component {
  CardImage = styled.img`
    max-height: 360px;
    object-fit: cover;
    width: 100%;
  `;

  onLike = () => console.log("Liking.");

  onBookmark = () => console.log("Bookmarking.");

  onShare = () => console.log("Sharing.");

  onComment = () => console.log("Commenting.");

  render() {
    const { CardImage, onLike, onBookmark, onShare, onComment } = this;

    return (
      <Card
        header="Corsica"
        media={
          <CardImage
            src="https://www.zoggs.com/wp/wp-content/uploads/2016/07/Palombaggia-beach.jpg"
            alt="beach on corsica"
          />
        }
        body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora."
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
      />
    );
  }
}
