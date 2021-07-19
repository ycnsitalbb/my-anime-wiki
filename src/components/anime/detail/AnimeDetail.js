import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeContent from "./AnimeContent";
import jikan from "../../../apis/jikan";
import _ from 'lodash'
const AnimeDetail = () => {
  let { animeId } = useParams();
  const [anime,setAnime] = useState(null);
  const [animeReviews,setAnimeReviews] = useState([]);
  const [animePictures,setAnimePictures] = useState([]);
  useEffect(() => {
    async function fetchData(){
      const mainData = await jikan.get(`https://api.jikan.moe/v3/anime/${animeId}`)
      setAnime(mainData.data)
      const reviewData = await jikan.get(`https://api.jikan.moe/v3/anime/${animeId}/reviews`)
      setAnimeReviews(reviewData.data.reviews)
      const picturesData = await jikan.get(`https://api.jikan.moe/v3/anime/${animeId}/pictures`)
      setAnimePictures(_.slice(picturesData.data.pictures,0,5))
    }
    fetchData()
  }, []);
  return <AnimeContent anime={anime} reviews={animeReviews} pictures={animePictures}></AnimeContent>
};
export default AnimeDetail;
