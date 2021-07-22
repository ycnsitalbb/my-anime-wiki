import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeContent from "./AnimeContent";
import jikan from "../../../apis/jikan";
import _ from "lodash";
const AnimeDetail = () => {
  let { mal_id } = useParams();
  const [anime, setAnime] = useState(null);
  const [animeReviews, setAnimeReviews] = useState([]);
  const [animePictures, setAnimePictures] = useState([]);
  const [animeChars, setAnimeChars] = useState([]);
  const [animeStaffs, setAnimeStaffs] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const mainData = await jikan.get(
        `https://api.jikan.moe/v3/anime/${mal_id}`
      );
      setAnime(mainData.data);
      const reviewData = await jikan.get(
        `https://api.jikan.moe/v3/anime/${mal_id}/reviews`
      );
      setAnimeReviews(reviewData.data.reviews);
      const picturesData = await jikan.get(
        `https://api.jikan.moe/v3/anime/${mal_id}/pictures`
      );
      setAnimePictures(_.slice(picturesData.data.pictures, 0, 5));
      const charStaffsData = await jikan.get(
        `https://api.jikan.moe/v3/anime/${mal_id}/characters_staff`
      );
      setAnimeStaffs(_.slice(charStaffsData.data.staff, 0, 5));
    }
    fetchData();
  }, []);
  return (
    <AnimeContent
      anime={anime}
      reviews={animeReviews}
      pictures={animePictures}
      staffs={animeStaffs}
    ></AnimeContent>
  );
};
export default AnimeDetail;
