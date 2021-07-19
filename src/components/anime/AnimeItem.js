import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToList, removeFromList, fetchAnimeDetail } from "../../actions";
import BtnAnime from "../others/button/BtnAnime";
const AnimeItem = (props) => {
  return (
    <div className="item">
      <div className="image">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="content">
        <Link className="header" to={`/anime/${props.anime.mal_id}`}>
          {props.title}
        </Link>
        <div className="meta">
          <span>Description</span>
        </div>
        <div className="description">
          <p>{props.synopsis}</p>
        </div>
        <div className="extra">MyAnimeList Score: {props.score}</div>
      </div>
      <div className="ui">
        <BtnAnime
          title={props.anime.title}
          image_url={props.anime.image_url}
          animeId={props.anime.mal_id}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { userId: state.user.userId, animeList: state.user.animeList };
};
export default connect(mapStateToProps, {
  addToList,
  removeFromList,
  fetchAnimeDetail,
})(AnimeItem);
