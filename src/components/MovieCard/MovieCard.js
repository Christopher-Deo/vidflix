import React from 'react';
import { Badge } from "@material-ui/core";


import ContentModal from '../ContentModal/ContentModal';
import "./MovieCard.css";

const MovieCard = (props) => {
  const posterImage = 'https://www.themoviedb.org/t/p/w94_and_h141_bestv2' + props.poster;
  const mediaType = props.mediaType;
  const id = props.id;
  
  return (

    <ContentModal mediaType={mediaType} id={id} posterImage={posterImage}>
      <Badge badgeContent={props.voteAverage}
        color={props.voteAverage > 6 ? 'primary' : 'secondary'} />
      <img className='poster' src={posterImage} alt={props.title} />
      <b className="title">{props.title}</b>
      <div className="subTitle">
        <span>
          {props.mediaType === "tv" ? "TV Series" : "Movie"}
        </span>
        <span>{props.date}</span>
      </div>

    </ContentModal>


  );
};

export default MovieCard;
