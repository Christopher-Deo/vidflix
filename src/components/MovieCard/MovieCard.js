import React from 'react'
import "./MovieCard.css"
import { smallPlaceholder, unavailable } from "../../config/config";
import Badge from '@mui/material/Badge';
// import ContentModal from "../ContentModal/ContentModal";

const MovieCard = ({
  id,
  poster,
  title,
  date,
  mediaType,
  voteAverage,
  }) => {
  return (
    <div className='media'>
      <Badge badgeContent={voteAverage}
        color={voteAverage > 6 ? 'primary' : 'secondary'} />
      <img className='poster' src={poster? `${smallPlaceholder} / ${poster} `: unavailable } alt={title} />
      <b className="title">{title}</b>
      <span className='subTitle'>
        {mediaType === "tv" ? "TV Series" : "Movie"}
      </span>
      <span className='subTitle'>{date}</span>
    </div>
  )
}

export default MovieCard
