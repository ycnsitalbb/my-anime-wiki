import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jikan from "../../apis/jikan";
import _ from "lodash";
import { Container } from "semantic-ui-react";

import Overview from "./components/Overview";
import Character from "./components/Character";
import Picture from "./components/Picture";
import Staff from "./components/Staff";
import Review from "./components/Review";
import Trailer from "./components/Trailer";
import Spinner from "../../components/Spinner";
import Rec from "./components/Rec";
const Detail = () => {
  let { mal_id } = useParams();
  const [anime, setAnime] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [staff, setStaff] = useState([]);
  const [trailers,setTrailers] = useState([]);
  const [recommendations,setRecommendations] = useState([])
  useEffect(() => {
    async function fetchData() {
      setAnime(null)

      const animeData = await jikan.get(
        `https://api.jikan.moe/v3/anime/${mal_id}`
      );
      setAnime(animeData.data);
      const reviewData = await jikan.get(
        `https://api.jikan.moe/v3/anime/${mal_id}/reviews`
      );
      setReviews(reviewData.data.reviews);
      const picturesData = await jikan.get(
        `https://api.jikan.moe/v3/anime/${mal_id}/pictures`
      );
      setPictures(picturesData.data.pictures);
      const charStaffsData = await jikan.get(
        `https://api.jikan.moe/v3/anime/${mal_id}/characters_staff`
      );
      // only display staffs with images
      setStaff(_.slice(charStaffsData.data.staff,0,20));
      // only display main characters
      setCharacters(charStaffsData.data.characters.filter(character=>character.role==="Main"))

      const trailersData = await jikan.get(
        `https://api.jikan.moe/v3/anime/${mal_id}/videos`
      )
      setTrailers(trailersData.data.promo)

      const recData = await jikan.get(`https://api.jikan.moe/v3/anime/${mal_id}/recommendations`)
      setRecommendations(_.slice(recData.data.recommendations,0,24))
    }
    fetchData();
  },[mal_id]);
  if(anime&&staff&&characters&&trailers&&pictures&&reviews&&recommendations){
    return (
      <Container>
        <Overview anime={anime} />
        <Staff staff={staff}></Staff>
        <Character characters={characters} />
        <Trailer trailers={trailers} />
        <Picture pictures={pictures} />
        <Review reviews={reviews} />
        <Rec recommendations={recommendations} />
      </Container>
    );
  }else{
    return <Spinner></Spinner>
  }

};
export default Detail;