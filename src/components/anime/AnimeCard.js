import React from "react";

const AnimeCard = (props) => {
  return (
      <div className="item">
        <div className="image">
          <img src={props.img} />
        </div>
        <div className="content">
          <a className="header" href={props.url} target="_blank">{props.title}</a>
          <div className="meta">
            <span>Description</span>
          </div>
          <div className="description">
            <p>{props.synopsis}</p>
          </div>
          <div className="extra">MyAnimeList Score: {props.score}</div>
        </div>
      </div>

  );
};
export default AnimeCard