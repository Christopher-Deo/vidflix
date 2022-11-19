import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from "../../components/MovieCard/MovieCard"
import BasicPagination from "../../components/Pagination/BasicPagination"
import "./Trending.css"



const Trending = () => {
  const [content, setContent] = useState([]);
  const [resultsPage, setResultsPage] = useState(1);

  const fetchTrending = async () => {  
    const { data } = await axios.get
      (`https://api.themoviedb.org/3/trending/all/day?api_key=5a89cc49b8ba1aac42aba5e9e0f14705&page=${resultsPage}`);
    setContent(data.results); 
    console.log('data = ', data);
    console.log("data.results = ", data.results);
    }
    
  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending()
    // eslint-disable-next-line
  }, [resultsPage])

  return (
    <div className='page'>
      <span className='pageTitle'>Trending Today</span>
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
      < BasicPagination setResultsPage={setResultsPage} />
    </div>
  )  
} 
export default Trending;
