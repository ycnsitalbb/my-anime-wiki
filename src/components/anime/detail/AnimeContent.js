import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Image,
  Header,
  Rating,
  Container,
  Label,
} from "semantic-ui-react";
import { search } from "../../../actions";
import BtnAnime from "../../others/button/BtnAnime";
import MyLoader from "../../others/MyLoader";
import ReviewAccordion from "../../others/ReviewAccordin";
import MyMultiItemCarousel from "../../others/MyMultiItemCarousel";
const AnimeContent = ({ anime, search, reviews,pictures }) => {
  const renderGenres = () => {
    if (!!anime.genres) {
      return anime.genres.map((genre) => (
        <Label
          as={Link}
          to="/search"
          onClick={() => {
            search(null, 1, genre.mal_id);
          }}
        >
          {genre.name}
        </Label>
      ));
    } else {
      return null;
    }
  };

  const renderStudios = () => {
    if (!!anime.studios) {
      return anime.studios.map((studio) => (
        <div className="ui label">{studio.name}</div>
      ));
    } else {
      return null;
    }
  };

  const renderTrailer = () => {
    if (!!anime.trailer_url) {
      return (
        <iframe
          className="video"
          title="Youtube player"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          width="800"
          height="600"
          src={anime.trailer_url}
        ></iframe>
      );
    }
  };

  const renderContent = () => {
    if (!!anime) {
      return (
        <Container>
          <Header as="h1">
            {anime.title}
            <Header.Subheader>{anime.title_japanese}</Header.Subheader>
          </Header>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <Image
                  src={anime.image_url}
                  alt={anime.title}
                  size="medium"
                ></Image>
              </Grid.Column>
              <Grid.Column>
                <div>Studio: {renderStudios()}</div>
                <div>Status: {anime.status}</div>
                <div>Aired from {anime.aired.string}</div>
                <div>Duration for single episode: {anime.duration}</div>
                <div>Rating: {anime.rating}</div>
                <div>Genres: {renderGenres()}</div>
              </Grid.Column>
              <Grid.Column>
                <div>
                  Score:{" "}
                  <Rating
                    icon="star"
                    defaultRating={anime.score / 2}
                    maxRating={5}
                    disabled
                  />
                  {anime.score}
                </div>
                <div>Rank: {anime.rank}</div>
                <div>Popularity: {anime.popularity}</div>

                <BtnAnime
                  image_url={anime.image_url}
                  animeId={anime.mal_id}
                  title={anime.title}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          
            <h2>Synopsis</h2>
            <p>{anime.synopsis}</p>
          
          <div>
            <h2>Trailer</h2>
            {renderTrailer()}
          </div>
          <Header as="h2" content="Reviews"/>
          {reviews ? (
            <ReviewAccordion reviews={reviews} />
          ) : (
            <div>Loading reviews</div>
          )}
          <Header as ="h2" content="Pictures"/>
          <Image.Group size="small">
            {pictures.map(picture=><Image src={picture.small} fluid centered/>)}
          </Image.Group>
        </Container>
      );
    } else {
      return <MyLoader />;
    }
  };
  return renderContent();
};
export default connect(null, { search })(AnimeContent);
