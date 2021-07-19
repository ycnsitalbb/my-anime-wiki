import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addToList } from "../../../actions";
const BtnAddAnime = (props) => {
  return (
    <Button
      className="button ui"
      onClick={() =>
        props.addToList(props.userId, {
          mal_id: props.animeId,
          image_url: props.image_url,
          title: props.title,
        })
      }
      icon="plus"
      content="LIST"
      labelPosition="left"
      primary
    />
  );
};
export default connect(null, { addToList })(BtnAddAnime);
