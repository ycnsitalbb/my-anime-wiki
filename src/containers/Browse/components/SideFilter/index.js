import React, { useState } from "react";
import { Segment, Header, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { genresList } from "../../../../genres";
const SideFilter = () => {
  const [activeGenreId, setActiveGenreId] = useState(null);
  const handleGenreClicked = (clickedGenreId) => {
    if (activeGenreId === clickedGenreId) {
      setActiveGenreId(null);
    } else {
      setActiveGenreId(clickedGenreId);
    }
  };
  return (
    <Segment>
      <Header>Anime Filter</Header>
      <Segment>
        <Header>Genre</Header>
        <Label.Group>
          {genresList.map(({ genre_id, genre_name }) => (
            <Label
              key={genre_id}
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
  );
};
export default SideFilter;
