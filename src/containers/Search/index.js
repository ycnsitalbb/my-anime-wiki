import React from "react";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import { Container } from "semantic-ui-react";
const Search = () => {
  return (
    <Container>
      <SearchBar />
      <SearchResult />
    </Container>
  );
};
export default Search;
