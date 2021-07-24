import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
  ButtonBack,
} from "pure-react-carousel";
import React from "react";
import { Button, Grid } from "semantic-ui-react";
import CustomDotGroup from "./components/DotGroup";

const Carousel = ({ items, width = 1, height = 0.3 }) => {
  const renderSlides = () => {
    return items.map((item, index) => {
      return <Slide index={index}>{item}</Slide>;
    });
  };
  return (
    <CarouselProvider
      naturalSlideWidth={width}
      naturalSlideHeight={height}
      totalSlides={items.length}
    >
      <Slider>{renderSlides()}</Slider>
      {/* <Grid>
        <Grid.Column width={1}>
          <Button icon="angle left" as={ButtonBack}></Button>
        </Grid.Column>
        <Grid.Column width={14}>
        <Slider>{renderSlides()}</Slider>
        </Grid.Column>
        <Grid.Column width={1}>
          <Button icon="angle right" as={ButtonNext}></Button>
        </Grid.Column>
      </Grid> */}
      
      <CustomDotGroup slides={items.length} />
    </CarouselProvider>
  );
};

export default Carousel;
