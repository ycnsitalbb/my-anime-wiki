import React from "react";
import { Image, Card, Popup, Rating } from "semantic-ui-react";
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
          <Popup
            content={
              <div>
                <div>{title}</div>
                Rating:
                <Rating
                  icon="star"
                  disabled
                  defaultRating={score / 2}
                  maxRating={5}
                />
              </div>
            }
            trigger={
              <Card.Header as={Link} to={`/anime/${mal_id}`}>
                {truncTitle(title)}
              </Card.Header>
            }
          />
        </Card.Content>
      );
  };
  return (
    <Card fluid raised={true}>
      <Image
        size="large"
        src={image_url}
      />
      {renderCardContent()}
    </Card>
  );
};
export default AnimeCard;
