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
  Popup,
  Segment,
} from "semantic-ui-react";
import { search } from "../../../actions";
import BtnAnime from "../../others/button/BtnAnime";
import MyLoader from "../../others/MyLoader";
import ReviewAccordion from "../../others/ReviewAccordin";
const AnimeContent = ({ anime, search, reviews, pictures, staffs }) => {
  const renderGenres = () => {
    if (!!anime.genres) {
      return anime.genres.map((genre) => (
        <Label
          as={Link}
          to={`/browse?genre=${genre.mal_id}`}
          color="blue"
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
    if (anime.trailer_url) {
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
  const renderStaffs = () => {
    return staffs.map((staff) => {
      return (
        <Popup trigger={<Label as="a" content={staff.name} color="grey"/>}>
          <Popup.Header>{staff.name}</Popup.Header>
          <Popup.Content>
            {staff.positions.map((position) => (
              <span>{position}</span>
            ))}
            <Image src={staff.image_url} size="small"></Image>
          </Popup.Content>
        </Popup>
      );
    });
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
              <Grid.Column width={3}>
                <Image
                  src={anime.image_url}
                  alt={anime.title}
                  size="medium"
                ></Image>
              </Grid.Column>
              <Grid.Column width={5}>
                <div>Studio: {renderStudios()}</div>
                <div>Status: {anime.status}</div>
                <div>Aired from {anime.aired.string}</div>
                <div>Duration for single episode: {anime.duration}</div>
                <div>Rating: {anime.rating}</div>
                <div>Genres: <Label.Group>{renderGenres()}</Label.Group></div>
                <div>Staffs:<Label.Group>{renderStaffs()}</Label.Group></div>
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

          <div>
            <h2>Trailer</h2>
            {renderTrailer()}
          </div>
          <Header as="h2" content="Reviews" />
          {reviews ? (
            <ReviewAccordion reviews={reviews} />
          ) : (
            <div>Loading reviews</div>
          )}
          <Header as="h2" content="Pictures" />
          <Image.Group size="small">
            {pictures.map((picture) => (
              <Image src={picture.small} fluid centered />
            ))}
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
