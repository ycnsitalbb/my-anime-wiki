import React from "react";
import AnimeItem from "./AnimeItem";
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

export default AnimeList;