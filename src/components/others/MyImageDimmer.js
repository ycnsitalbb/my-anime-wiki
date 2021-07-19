import React, { useState } from "react";
import { Dimmer, Image, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import BtnAnime from "../others/button/BtnAnime";
const MyImageDimmer = ({ title, image_url, animeId }) => {
  const [active, setActive] = useState(false);
  const content = (
    <div>
      <Header as="h3" inverted content={title} />
      <BtnAnime animeId={animeId} image_url={image_url} title={title} />
      <Button
        as={Link}
        icon="eye"
        labelPosition="left"
        content="View"
        to={`/anime/${animeId}`}
      />
    </div>
  );
  return (
    <Dimmer.Dimmable
      as={Image}
      dimmed={active}
      dimmer={{ active, content }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      size="large"
      src={image_url}
      rounded
      bordered
    />
  );
};
export default MyImageDimmer;
