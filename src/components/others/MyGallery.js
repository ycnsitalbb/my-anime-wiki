import React from "react";
import { Grid, Container, Card } from "semantic-ui-react";
import AnimeCard from "./AnimeCard";
const MyGallery = ({items,itemsPerRow=6,dimmerActive}) => {
  const renderItems = () => {
    if (items) {
      return items.map((item) => {
        return (
          <AnimeCard
            dimmerActive ={dimmerActive}
            image_url={item.image_url}
            title={item.title}
            animeId={item.mal_id}
            score = {item.score}
          />
        );
      });
    }
  };
  return (
      <Card.Group itemsPerRow={itemsPerRow}>{renderItems()}</Card.Group>
  );
};
export default MyGallery;
