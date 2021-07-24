import React from "react";
import AnimeGallery from "../../../../components/AnimeGallery";
import _ from "lodash";
import { Header } from "semantic-ui-react";
import Carousel from "../../../../components/Carousel";
const Rec = ({ recommendations }) => {
  const galleries = _.chunk(recommendations, 6).map((group) => (
    <AnimeGallery items={group}></AnimeGallery>
  ));
  return (
    <React.Fragment>
      <Header as="h2" content="Recommendation" />
      <Carousel items={galleries} />
    </React.Fragment>
  );
};
export default Rec;
