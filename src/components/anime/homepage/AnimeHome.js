import React, { useEffect, useState } from "react";
import jikan from "../../../apis/jikan";
import MyMultiItemCarousel from "../../others/MyMultiItemCarousel";
import { Container, Header } from "semantic-ui-react";
const AnimeHome = () => {
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
  return (
    <Container>
      <Header as="h2">Top Airing Anime</Header>
      <MyMultiItemCarousel
        items={topAiringAnime}
        itemsPerSlide={6}
        interval={null}
      />
      <br />
      <h2>Top Upcoming Anime</h2>
      <MyMultiItemCarousel
        items={topUpcomingAnime}
        itemsPerSlide={6}
        interval={null}
      />
      <br />
      <h2>Top Rated Anime</h2>
      <MyMultiItemCarousel
        items={topRatedAnime}
        itemsPerSlide={6}
        interval={null}
      />
    </Container>
  );
};
export default AnimeHome;
