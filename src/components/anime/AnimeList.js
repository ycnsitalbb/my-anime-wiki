import React from "react";
import TopMenu from "../TopMenu";
import SearchBar from "./search/SearchBar";
import SearchResult from './search/SearchResult'
const AnimeList = () => {
  return (
    <div>
      <TopMenu />
      <SearchBar/>
      <SearchResult/>
    </div>
  );
};
export default AnimeList;
