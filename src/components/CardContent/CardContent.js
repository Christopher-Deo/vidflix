import React from 'react'

const CardContent = () => {
  return (
     <div className='trending'>
        {content && content.map((c) => (<MovieCard
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            mediaType={c.media_type}
            voteAverage={c.vote_average}
              />))}
          </div>
 
  )
}

export default CardContent
