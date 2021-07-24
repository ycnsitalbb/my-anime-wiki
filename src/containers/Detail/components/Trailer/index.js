import React from "react";
import { Embed, Header } from "semantic-ui-react";
import Carousel from "../../../../components/Carousel";
const Trailer = ({ trailers }) => {
  const trailerItems = trailers.map((trailer) => (
    <Embed
      hd={true}
      placeholder={trailer.image_url}
      url={trailer.video_url}
    ></Embed>
  ));
  return (
    <React.Fragment>
        <Header content="Trailer" as="h2" />
      <Carousel items={trailerItems} width={1} height={0.58} />
    </React.Fragment>
  );
};
export default Trailer;
