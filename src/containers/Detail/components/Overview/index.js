import React from "react";
import { Link } from "react-router-dom";
import { Header, Grid, Image, Label, Rating, Segment } from "semantic-ui-react";
import BtnAnime from "../../../../components/BtnAnime";
const Overview = ({ anime }) => {
  const genres = anime.genres.map((genre) => (
    <Label
      as={Link}
      to={`/browse?genre=${genre.mal_id}`}
      color="blue"
      content={genre.name}
    />
  ));
  const studios = anime.studios.map((studio) => (
    <Label content={studio.name} />
  ));

  return (
    <React.Fragment>
      <Header as="h1" content={anime.title} subheader={anime.title_japanese} />
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src={anime.image_url} alt={anime.title} size="medium" />
          </Grid.Column>
          <Grid.Column width={5}>
            <div>
              Studio: <Label.Group>{studios}</Label.Group>
            </div>
            <div>Status: {anime.status}</div>
            <div>Aired from {anime.aired.string}</div>
            <div>Duration for single episode: {anime.duration}</div>
            <div>Rating: {anime.rating}</div>
            <div>
              Genres: <Label.Group>{genres}</Label.Group>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div>
              Score:
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
              mal_id={anime.mal_id}
              title={anime.title}
              score={anime.score}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <h2>Synopsis</h2>
      <Segment>{anime.synopsis}</Segment>
    </React.Fragment>
  );
};
export default Overview;
