import React from "react";
import { Image, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import _ from "lodash";
import "./style.css";
const AnimeCard = ({ title, image_url, mal_id, score }) => {
  const truncTitle = (title) => {
    return _.truncate(title, { length: 28, separator: " " });
  };
  const renderCardContent = () => {
    return (
      <Card.Content>
        <Card.Header>{truncTitle(title)}</Card.Header>
      </Card.Content>
    );
  };
  return (
    <Card fluid raised={true} as={Link} to={`/anime/${mal_id}`}>
      <Image
        label={{
          corner: "left",
          content: score === 0 ? "N/A" : _.round(score, 1),
          color: "blue",
          size: "mini",
        }}
        size="large"
        src={image_url}
      />
      {renderCardContent()}
    </Card>
  );
};
export default AnimeCard;
