import React, { useState } from "react";
import { Image, Header, Button, Card, Popup, Rating } from "semantic-ui-react";
import { Link } from "react-router-dom";
import BtnAnime from "./button/BtnAnime";
import _ from "lodash";
import "./AnimeCard.css";
const AnimeCard = ({ title, image_url, mal_id,score, dimmerActive }) => {
  const [active, setActive] = useState(false);
  const truncTitle = (title) => {
    return _.truncate(title, { length: 28, separator: " " });
  };
  const content = (
    <div>
      <Header as="h3" inverted content={title} />
      <BtnAnime
        score={score}
        mal_id={mal_id}
        image_url={image_url}
        title={truncTitle(title)}
      />
      <Button
        as={Link}
        icon="eye"
        labelPosition="left"
        content="View"
        to={`/anime/${mal_id}`}
      />
    </div>
  );
  const renderCardContent = () => {
    if (!dimmerActive) {
      return (
        <Card.Content>
          <Popup
            content={
              <div>
                <div>{title}</div>
                Rating: <Rating icon="star" disabled defaultRating={score/2} maxRating={5}/>
              </div>
            }
            trigger={<Card.Header as={Link} to={`/anime/${mal_id}`}>{truncTitle(title)}</Card.Header>}
          />
        </Card.Content>
      );
    }
  };
  return (
    <Card fluid>
      <Image
        dimmed={active}
        dimmer={dimmerActive ? { active, content } : null}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        size="large"
        src={image_url}
      />
      {renderCardContent()}
    </Card>
  );
};
export default AnimeCard;
