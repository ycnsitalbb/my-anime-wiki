import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";
import { addToList, removeFromList, fetchAnimeDetail } from "../../../actions";
import BtnAnime from "../../others/button/BtnAnime";
const AnimeItem = ({anime}) => {
  return (
    <Item>
      <Item.Image as={Link} to={`/anime/${anime.mal_id}`} src={anime.image_url} alt={anime.title} />
      <Item.Content>
        <Item.Header
          as={Link}
          to={`/anime/${anime.mal_id}`}
          content={anime.title}
        />
        <Item.Meta content="Description" />
        <Item.Description content={anime.synopsis} />
        <Item.Extra>
          <div>MyAnimeList Score: {anime.score}</div>
          <div>Rated:{anime.rated}</div>
          <div>Episodes:{anime.episodes}</div>
          </Item.Extra>

        <BtnAnime
          title={anime.title}
          image_url={anime.image_url}
          mal_id={anime.mal_id}
          score={anime.score}
        />
      </Item.Content>
    </Item>
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
