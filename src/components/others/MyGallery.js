import React from "react";
import { Card, Header } from "semantic-ui-react";
import AnimeCard from "./AnimeCard";
const MyGallery = ({ title, items, itemsPerRow = 6, dimmerActive }) => {
  const renderItems = () => {
    if (items) {
      return items.map((item) => {
        return (
          <AnimeCard
            dimmerActive={dimmerActive}
            image_url={item.image_url}
            title={item.title}
            mal_id={item.mal_id}
            score={item.score}
          />
        );
      });
    }
  };
  return (
    <React.Fragment>
      <Header>{title}</Header>
      <Card.Group itemsPerRow={itemsPerRow}>{renderItems()}</Card.Group>
    </React.Fragment>
  );
};
export default MyGallery;
