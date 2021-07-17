import React from "react";
import TopMenu from "../TopMenu";
import SearchBar from "./search/SearchBar";
import SearchResults from "./search/SearchResults";
const AnimeSearch = () => {
  return (
    <div>
      <SearchBar/>
      <SearchResults/>
    </div>
  );
};
export default AnimeSearch;
