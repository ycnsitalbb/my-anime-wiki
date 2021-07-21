import React from "react";
import { Rail, Segment, Header, Label } from "semantic-ui-react";
import { genresList } from "../../../genres";
const BrowseSideMenu = () => {
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
          <Header>Season</Header>
          <Label.Group>
            <Label>All</Label>
            <Label>Spring</Label>
            <Label>Summer</Label>
            <Label>Fall</Label>
            <Label>Winter</Label>
          </Label.Group>
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
            {genresList.map((genre) => (
              <Label>{genre.genre_name}</Label>
            ))}
          </Label.Group>
        </Segment>
      </Segment>
    </Rail>
  );
};
export default BrowseSideMenu;
