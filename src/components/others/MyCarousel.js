import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAnimeDetail } from "../../actions";
const MyCarousel = (props) => {
  const renderItems = () => {
    return props.items.map((item) => {
      return (
        <Carousel.Item>
          <Link to={`/anime/${item.mal_id}`} onClick={()=>props.fetchAnimeDetail(item.mal_id)}>
            <img
              className="d-block w-100"
              src={item.image_url}
              alt={item.title}
            />
          </Link>
        </Carousel.Item>
      );
    });
  };
  return (
    <Carousel
      variant="dark"
      nextLabel=""
      prevLabel=""
      interval={3000}
      pause={false}
      style={{ height: "300px", width: "200px" }}
    >
      {renderItems()}
    </Carousel>
  );
};
export default connect(null,{fetchAnimeDetail})(MyCarousel);
