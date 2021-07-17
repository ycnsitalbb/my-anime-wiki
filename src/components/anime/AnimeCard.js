import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToList,removeFromList,fetchAnimeDetail } from "../../actions";
const AnimeCard = (props) => {
  const renderButton = () => {
    if (props.userId) {
      //when the anime is in collection, show "remove" button
      if (!!props.animeList.find(anime=>anime.mal_id===props.anime.mal_id)) {
        return (
          <button
            className="button ui"
            onClick={() => props.removeFromList(props.userId, props.animeId)}
          >
            <i className="icon minus"></i>
            REMOVE
            
          </button>
        );
      } else {
        //when the anime is not in collection,show the "add" button
        return (
          <button
            className="button ui"
            onClick={() => props.addToList(props.userId, props.anime)}
          >
          <i className="icon plus"></i>
          ADD TO LIST
          </button>
        );
      }
    } else {
      return null;
    }
  };
  return (
    <div className="item">
      <div className="image">
        <img src={props.img} alt={props.title}/>
      </div>
      <div className="content">
        <Link className="header" onClick={()=>props.fetchAnimeDetail(props.anime.mal_id)} to={`/anime/${props.anime.mal_id}`}>
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
      <div className="ui">{renderButton()}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { userId: state.user.userId, animeList: state.user.animeList };
};
export default connect(mapStateToProps, { addToList,removeFromList,fetchAnimeDetail })(AnimeCard);
