import React, { useEffect, useState } from "react";
import jikan from "../../apis/jikan";
import Carousel from "../../components/Carousel";
import { Container, Header } from "semantic-ui-react";
import _ from "lodash";
import AnimeGallery from "../../components/AnimeGallery";
const Home = () => {
  const [topRatedAnime, setTopRatedAnime] = useState([]);
  const [topAiringAnime, setTopAiringAnime] = useState([]);
  const [topUpcomingAnime, setTopUpcomingAnime] = useState([]);
  //fetch the anime data when the page renders for the first time
  useEffect(() => {
    async function fetchData() {
      const topRated = await jikan.get(
        "/search/anime?order_by=score&sort=desc&page=1"
      );
      setTopRatedAnime(topRated.data.results);

      const topAiring = await jikan.get("/top/anime/1/airing");
      setTopAiringAnime(topAiring.data.top);

      const topUpcoming = await jikan.get("/top/anime/1/upcoming");
      setTopUpcomingAnime(topUpcoming.data.top);
    }
    fetchData();
  }, []);
  const createGalleries = (items,size)=>{
    return _.chunk(items, size).map((chunk,index)=><AnimeGallery key={index} items={chunk} />)
  }

  return (
    <Container>
      <Header as="h2">Top Airing Anime</Header>
      <Carousel items={createGalleries(topAiringAnime,6)} />
      <Header as="h2">Top Upcoming Anime</Header>
      <Carousel items={createGalleries(topUpcomingAnime,6)} />
      <Header as="h2">Top Rated Anime</Header>
      <Carousel items={createGalleries(topRatedAnime,6)} />
    </Container>
  );
};
export default Home;
