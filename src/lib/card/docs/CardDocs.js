import React, { Component } from "react";
import { Card } from "../Card";
import styled from "styled-components";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

// Components
import { Button } from "../../button/Button";

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
    max-width: 480px;
    width: 100%;
  \`;

  FooterActions = styled.div\`
    display: flex;
    overflow-x: auto;
  \`;

  onLike = () => {
    console.log("Liking.");
  };
  onBookmark = () => {
    console.log("Bookmarking.");
  };
  onShare = () => {
    console.log("Sharing.");
  };

  render() {
    const { CardImage, FooterActions, onLike, onBookmark, onShare } = this;

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
          <FooterActions key="editCard">
            <Button value="Like" onClick={onLike} />
            <Button value="Bookmark" onClick={onBookmark} />
            <Button value="Share" onClick={onShare} />
          </FooterActions>
        ]}
      />
    );
  }
}`;

class CardDemo extends Component {
  CardImage = styled.img`
    max-width: 480px;
    width: 100%;
  `;

  FooterActions = styled.div`
    display: flex;
    overflow-x: auto;
  `;

  onLike = () => {
    console.log("Liking.");
  };
  onBookmark = () => {
    console.log("Bookmarking.");
  };
  onShare = () => {
    console.log("Sharing.");
  };

  render() {
    const { CardImage, FooterActions, onLike, onBookmark, onShare } = this;

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
          <FooterActions key="editCard">
            <Button value="Like" onClick={onLike} />
            <Button value="Bookmark" onClick={onBookmark} />
            <Button value="Share" onClick={onShare} />
          </FooterActions>
        ]}
      />
    );
  }
}
