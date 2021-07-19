import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { removeFromList } from "../../../actions";
const BtnRemoveAnime = (props) => {
  return (
    <Button
      onClick={() => props.removeFromList(props.userId, props.animeId)}
      icon="minus"
      content="REMOVE"
      labelPosition="left"
      negative
    />
  );
};
export default connect(null,{removeFromList})(BtnRemoveAnime);
