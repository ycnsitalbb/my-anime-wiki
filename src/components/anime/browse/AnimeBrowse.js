import _ from "lodash";
import React, { useState, useEffect } from "react";
import { Container, Grid, Segment, Pagination } from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import jikan from "../../../apis/jikan";
import MyGallery from "../../others/MyGallery";
import BrowseSideMenu from "./BrowseSideMenu";
import BrowseTopMenu from "./BrowseTopMenu";
const AnimeBrowse = () => {
  const [totalPage,setTotalPage] =useState(0);
  const [animeChunks, setAnimeChunks] = useState([]);
  const [animeDisplayed, setAnimeDisplayed] = useState([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const season = query.get("season");
  const genreId = query.get("genre");
  const year = query.get("year");
  useEffect(() => {
    async function fetchData() {
      const response = await jikan.get("/top/anime/1/airing");
      const anime = response.data.top;
      const anime_chunks = _.chunk(anime, 20);
      setAnimeChunks(anime_chunks);
      setAnimeDisplayed(anime_chunks[0]);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      console.log(`genreId:${genreId} year:${year} season:${season}`)
      // if only genre is selected
      if (genreId &&!season&&!year) {
        const response = await jikan.get(`/genre/anime/${genreId}/1`);
        const anime = response.data.anime;
        const anime_chunks = _.chunk(anime, 20);
        setAnimeChunks(anime_chunks);
        setAnimeDisplayed(anime_chunks[0]);
      }else if(genreId && season && !year){
        const response = await jikan.get(`/`)
      }
    }
    fetchData();
  }, [genreId, season, year]);
  const sortByScore = () => {
    return setAnimeDisplayed(
      _.reverse(_.sortBy(animeDisplayed, [(anime) => anime.score]))
    );
  };
  const sortByMember = () => {
    return setAnimeDisplayed(
      _.reverse(_.sortBy(animeDisplayed, [(anime) => anime.members]))
    );
  };
  const sortByStartDate = () => {
    return setAnimeDisplayed(
      _.reverse(_.sortBy(animeDisplayed, [(anime) => anime.start_date]))
    );
  };
  const handlePageChange = (e, { activePage }) => {
    setAnimeDisplayed(animeChunks[activePage - 1]);
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
            <MyGallery
              items={animeDisplayed}
              dimmerActive={false}
              itemsPerRow={5}
            />
            <BrowseSideMenu></BrowseSideMenu>
          </Segment>
        </Grid.Column>
      </Grid>
      <Container textAlign="center">
        <Pagination
          defaultActivePage={1}
          totalPages={animeChunks.length}
          onPageChange={handlePageChange}
        ></Pagination>
      </Container>
    </Container>
  );
};
export default AnimeBrowse;
