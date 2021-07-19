import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { Container } from "semantic-ui-react";
const AnimeSearch = () => {
  return (
    <Container>
      <SearchBar />
      <SearchResults />
    </Container>
  );
};
export default AnimeSearch;
