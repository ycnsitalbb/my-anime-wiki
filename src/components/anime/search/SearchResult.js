import React from "react";
import AnimeCard from "../AnimeCard";
import { connect } from "react-redux";
const SearchResult = (props) => {
  const renderResults = ()=>{
    if(!props.results){
      return null
    }else{
      return props.results.map((anime) => (
        <AnimeCard
          key={anime.mal_id}
          url={anime.url}
          img={anime.image_url}
          title={anime.title}
          synopsis={anime.synopsis}
          score={anime.score}
        />
      ));
    }
  }
  return <div className="ui divided items">{renderResults()}</div>;
};
const mapStateToProps = (state)=>{
  return {results:state.search.results}
}
export default connect(mapStateToProps)(SearchResult);
