import React from "react";
import { connect } from "react-redux";
import ModalAddAnime from "../ModalAddAnime";
import ModalRemoveAnime from "../ModalRemoveAnime";
const BtnAnime = ({
  mal_id,
  userId,
  animeList,
  image_url,
  title,
  score,
}) => {
  if (userId) {
    if (
      animeList.find((list) =>
        list.anime.find((anime) => anime.mal_id === mal_id)
      )
    ) {
      return <ModalRemoveAnime userId={userId} mal_id={mal_id}/>;
    } else {
      return (
        <ModalAddAnime
          userId={userId}
          mal_id={mal_id}
          image_url={image_url}
          title={title}
          score={score}
        />
      );
    }
  } else {
    return null;
  }
};
const mapStateToProps = (state) => {
  return { animeList: state.user.animeList, userId: state.user.userId };
};
export default connect(mapStateToProps)(BtnAnime);
