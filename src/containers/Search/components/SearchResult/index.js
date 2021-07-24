import React from "react";
import { connect } from "react-redux";
import AnimeItem from "./components/ResultItem";
const AnimeList = (props) => {
  const renderResults = ()=>{
    if(!props.animes){
      return null
    }else{
      return props.animes.map((anime) => (
        <AnimeItem
          key={anime.mal_id}
          anime = {anime}
        />
      ));
    }
  }
  return <div className="ui divided items">{renderResults()}</div>;
};
const mapStateToProps = (state) => {
    return { animes: state.search.results };
  };
  export default connect(mapStateToProps)(AnimeList);