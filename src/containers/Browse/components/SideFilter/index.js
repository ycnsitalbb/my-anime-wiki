import React, { useState } from "react";
import { Rail, Segment, Header, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { genresList } from "../../../../genres";
import SeasonSelector from "./components/SeasonSelector";
import YearSelector from "./components/YearSelector";
const BrowseSideMenu = () => {
  const [activeGenreId, setActiveGenreId] = useState(null);
  const handleGenreClicked = (clickedGenreId) => {
    if (activeGenreId === clickedGenreId) {
      setActiveGenreId(null);
    } else {
      setActiveGenreId(clickedGenreId);
    }
  };
  return (
    <Rail position="right">
        <Segment>
          <Header>Anime Filter</Header>
          <Segment>
            <Header>Status</Header>
            <Label.Group>
              <Label>All</Label>
              <Label>Upcoming</Label>
              <Label>Airing</Label>
              <Label>Finished</Label>
            </Label.Group>
          </Segment>
          <Segment>
            <Header>Year and Season</Header>
            <YearSelector></YearSelector>
            <SeasonSelector></SeasonSelector>
          </Segment>
          <Segment>
            <Header>Year</Header>
            <Label.Group>
              <Label>All</Label>
              <Label>2021</Label>
              <Label>2020</Label>
              <Label>2019-2015</Label>
              <Label>2014-2010</Label>
              <Label>Before 2010</Label>
            </Label.Group>
          </Segment>
          <Segment>
            <Header>Genre</Header>
            <Label.Group>
              {genresList.map(({ genre_id, genre_name }) => (
                <Label
                  as={Link}
                  active={activeGenreId === genre_id}
                  onClick={() => handleGenreClicked(genre_id)}
                  to={`/browse?genre=${genre_id}`}
                >
                  {genre_name}
                </Label>
              ))}
            </Label.Group>
          </Segment>
        </Segment>
    </Rail>
  );
};
export default BrowseSideMenu;
