import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Genres from "../../components/Genres/Genres";
import BasicPagination from "../../components/Pagination/BasicPagination"
import MovieCard from "../../components/MovieCard/MovieCard";
import useGenre from "../../hooks/useGenre";



export const Movies = (props) => {
  const [resultsPage, setResultsPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);
  // console.log(selectedGenres);
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=5a89cc49b8ba1aac42aba5e9e0f14705&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${resultsPage}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumberOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [genreforURL, resultsPage]);

  return (
    <div className='page'>
      <span className="pageTitle">Discover Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setResultsPage={setResultsPage}
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <MovieCard
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              mediaType="movie"
              voteAverage={c.vote_average}
            />
          ))}
      </div>
      {numberOfPages > 1 && (
        <BasicPagination setResultsPage={setResultsPage} numberOfPages={numberOfPages} />
      )}
    </div>
  );
};

export default Movies;

  

