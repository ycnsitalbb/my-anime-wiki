import _ from "lodash";
import React, { useState, useEffect, createRef } from "react";
import {
  Container,
  Grid,
  Segment,
  Pagination,
  Ref,
  Sticky,
} from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import jikan from "../../apis/jikan";
import AnimeGallery from "../../components/AnimeGallery";
import SideFilter from "./components/SideFilter";
import TopFilter from "./components/TopFilter";
import Spinner from "../../components/Spinner";
const Browse = () => {
  const [anime, setAnime] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const genreId = query.get("genre");
  const contextRef = createRef();

  useEffect(() => {
    async function fetchData() {
      if (genreId) {
        let response = await jikan.get(`/genre/anime/${genreId}/1`);
        setAnime(response.data.anime);
      } else {
        let response = await jikan.get("/top/anime/1/airing");
        setAnime(response.data.top);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      setCurrentPage(1);
      if(genreId){
      setAnime([]);
      const response = await jikan.get(
        `/genre/anime/${genreId}/${currentPage}`
      );
      setAnime(response.data.anime);
      setTotalPage(_.ceil(response.data.item_count / 100));
      }
    }
    fetchData();
  }, [genreId]);

  useEffect(() => {
    async function fetchData() {
      setAnime([]);
      if(genreId){
        const response = await jikan.get(
          `/genre/anime/${genreId}/${currentPage}`
        );
        setAnime(response.data.anime);
      }

    }
    fetchData();
  }, [currentPage]);

  const sortByScore = () => {
    return setAnime(_.reverse(_.sortBy(anime, [(anime) => anime.score])));
  };
  const sortByMember = () => {
    return setAnime(_.reverse(_.sortBy(anime, [(anime) => anime.members])));
  };
  const sortByStartDate = () => {
    return setAnime(_.reverse(_.sortBy(anime, [(anime) => anime.start_date])));
  };
  const handlePageChange = (e, { activePage }) => {
    setCurrentPage(activePage);
  };
  return (
    <div>
      <Container>
      <TopFilter
        byScore={sortByScore}
        byMember={sortByMember}
        byStartDate={sortByStartDate}
      /></Container>
      <Container>
      <Grid columns={2}>
        <Ref innerRef={contextRef}>
          
          <Grid.Column width={12}>
            <Segment>
              {anime.length===0?<Spinner></Spinner>:<AnimeGallery items={anime} itemsPerRow={4} />}
            </Segment>
          </Grid.Column>
          
          </Ref>
          <Grid.Column width={4}>
            <Sticky context={contextRef}>
              <SideFilter />
            </Sticky>
          </Grid.Column>

      </Grid>
      </Container>
      <Container textAlign="center">
        <Pagination
        siblingRange={2}
          defaultActivePage={1}
          totalPages={totalPage}
          onPageChange={handlePageChange}
        ></Pagination>
      </Container>
      </div>
  );
};
export default Browse;
