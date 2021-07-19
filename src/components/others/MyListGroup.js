import { ListGroup } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAnimeDetail } from "../../actions";
const MyListGroup = (props) => {
  const renderListItems = () => {
    return props.items.map((item,index) => {
      return (
        <Link
          to={`/anime/${item.mal_id}`}
          onClick={() => props.fetchAnimeDetail(item.mal_id)}
        >
          <ListGroup.Item>TOP {index+1}: {item.title}</ListGroup.Item>
        </Link>
      );
    });
  };
  return <ListGroup>{renderListItems()}</ListGroup>;
};
export default connect(null,{fetchAnimeDetail})(MyListGroup);