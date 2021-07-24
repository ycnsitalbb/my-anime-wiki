import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import React from "react";
import _ from "lodash";
import AnimeGallery from "../../components/AnimeGallery";
import CustomDotGroup from "./CustomDotGroup";

const CardCarousel = ({ anime }) => {
  const animeChunks = _.chunk(anime, 6);
  const renderChunk = (chunk) => {
    return <AnimeGallery items={chunk} itemsPerRow={6}></AnimeGallery>;
  };
  const renderSlides = () => {
    return animeChunks.map((chunk,index) => (
      <Slide index={index}>
        <AnimeGallery items={chunk} itemsPerRow={6}></AnimeGallery>
      </Slide>
    ));
  };
  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1.25}
      totalSlides={3}
      style={{ width: "300px" }}
    >
      <Slider>
        {renderSlides}
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
      <CustomDotGroup slides={3} />
    </CarouselProvider>
  );
};

export default CardCarousel;
