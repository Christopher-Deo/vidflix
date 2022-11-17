import React, { useEffect, useState } from 'react'
import Genres from "../../components/Genres/Genres";
import CustomPagination from "../../components/Pagination/BasicPagination";
import MovieCard from "../../components/MovieCard/MovieCard";
// import useGenre from "../../hooks/useGenre";

import axios from 'axios'


export const Movies = () => {
  const [resultsPage, setResultsPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
    const genreforURL = useGenre(selectedGenres);
  // console.log(selectedGenres);
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
    );
  };
      
  return (
    <div className='page'>
      <span className='pageTitle'>
        <h1 className="display-1">Movies</h1>
      </span>
    </div>
  )
}


