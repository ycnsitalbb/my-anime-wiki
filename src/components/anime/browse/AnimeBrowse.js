import _ from "lodash";
import React, { useState, useEffect } from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
import jikan from "../../../apis/jikan";
import MyGallery from "../../others/MyGallery";
import BrowseSideMenu from "./BrowseSideMenu";
import BrowseTopMenu from "./BrowseTopMenu";
const AnimeBrowse = () => {
  const [anime, setAnime] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await jikan.get("/top/anime/1/airing");
      setAnime(response.data.top);
    }
    fetchData();
  }, []);
  const sortByScore = () => {
    return setAnime(_.reverse(_.sortBy(anime, [(anime) => anime.score])));
  };
  const sortByMember = () => {
    return setAnime(_.reverse(_.sortBy(anime, [(anime) => anime.members])));
  };
  const sortByStartDate = () => {
    return setAnime(_.reverse(_.sortBy(anime, [(anime) => anime.start_date])));
  };
  return (
    <Container>
      <BrowseTopMenu
        byScore={sortByScore}
        byMember={sortByMember}
        byStartDate={sortByStartDate}
      ></BrowseTopMenu>
      <Grid columns={2}>
        <Grid.Column width={14}>
          <Segment>
            <MyGallery items={anime} dimmerActive={false} itemsPerRow={4}></MyGallery>
            <BrowseSideMenu></BrowseSideMenu>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default AnimeBrowse;
