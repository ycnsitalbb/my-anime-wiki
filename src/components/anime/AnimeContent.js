import React from "react";
import Loading from "../others/Loading";

const AnimeContent = ({ anime }) => {
  const renderGenres = () => {
    if (!!anime.genres) {
      return anime.genres.map((genre) => (
        <div className="ui label">{genre.name}</div>
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
        <div className="ui container">
          <h1>
            {anime.title_english}
            <small className="text-muted">{anime.title_japanese}</small>
          </h1>
          <div className="row">
            <div className="col-3">
              <img src={anime.image_url}></img>
            </div>
            <div className="col">
              <div>Studio: {renderStudios()}</div>
              <div>Status: {anime.status}</div>
              <div>Aired from {anime.aired.string}</div>
              <div>Duration for single episode: {anime.duration}</div>
              <div>Rating: {anime.rating}</div>
              <div>Genres: {renderGenres()}</div>
            </div>
            <div className="col-3">
              <div>Score: {anime.score}</div>
              <div>Rank: {anime.rank}</div>
              <div>Popularity: {anime.popularity}</div>
            </div>
          </div>
          <div>
            <h2>Synopsis</h2>
            <p>{anime.synopsis}</p>
          </div>
          <div>
            <h2>Trailer</h2>
            {renderTrailer()}
          </div>
        </div>
      );
    } else {
      return <Loading></Loading>;
    }
  };
  return renderContent();
};
export default AnimeContent;
