import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../../components/Genres/Genres";
import BasicPagination from "../../components/Pagination/BasicPagination";
import MovieCard from "../../components/MovieCard/MovieCard";
import useGenre from "../../hooks/useGenre";

const Series = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [resultsPage, setResultsPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);

  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=5a89cc49b8ba1aac42aba5e9e0f14705&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${resultsPage}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumberOfPages(data.total_pages);
    // console.log(data);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSeries();
    // eslint-disable-next-line
  }, [genreforURL, resultsPage]);

  return (
    <div className="page">
      <span className="pageTitle">Discover TV Series</span>
      <Genres
        type="tv"
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
              mediaType="tv"
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

export default Series;