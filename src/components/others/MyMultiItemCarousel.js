import React from "react";
import _ from "lodash";
import { Carousel } from "react-bootstrap";
import MyImageDimmer from "./MyImageDimmer";
import "./MyMultiItemCarousel.css";
const MyMultiItemCarousel = (props) => {
  const chunks = _.chunk(props.items, props.itemsPerSlide);
  const renderItems = (items) => {
    return items.map((item) => {
      return (
        <div className="col-lg-2" key={item.mal_id}>
          <MyImageDimmer title={item.title} image_url={item.image_url} score={item.score} animeId={item.mal_id}/>
        </div>
      );
    });
  };
  const renderCarouselItem = (chunks) => {
    return chunks.map((chunk) => {
      return (
        <Carousel.Item>
          <div className="container">
            <div className="row">{renderItems(chunk)}</div>
          </div>
        </Carousel.Item>
      );
    });
  };
  return (
    <React.Fragment>
      <Carousel
        nextLabel=""
        prevLabel=""
        interval={props.interval}
        style={{ height: "300px", width: "1200px" }}
      >
        {renderCarouselItem(chunks)}
      </Carousel>
    </React.Fragment>
  );
};
export default MyMultiItemCarousel;
