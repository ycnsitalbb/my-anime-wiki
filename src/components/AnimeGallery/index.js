import React from "react";
import { Card } from "semantic-ui-react";
import AnimeCard from "../AnimeCard";
const AnimeGallery = ({ items, itemsPerRow = 6 }) => {
  const renderItems = () => {
    if (items) {
      return items.map((item,index) => {
        return (
          <AnimeCard
            key={index}
            image_url={item.image_url}
            title={item.title}
            mal_id={item.mal_id}
            score={item.score}
          />
        );
      });
    }
  };
  return <Card.Group itemsPerRow={itemsPerRow}>{renderItems()}</Card.Group>;
};
export default AnimeGallery;
