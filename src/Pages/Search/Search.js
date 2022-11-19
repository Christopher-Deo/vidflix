import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import BasicPagination from "../../components/Pagination/BasicPagination";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Search.css";

const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [resultsPage, setResultsPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?
        api_key=5a89cc49b8ba1aac42aba5e9e0f14705&language=en-US
        &query=${searchText}&page=${resultsPage}&include_adult=false`
      );
      setContent(data.results);
      setNumberOfPages(data.total_pages);
    } catch (error) {
      console.log('Error message returned from search api call ', error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, resultsPage]);

  return (
    <div className="page">
      <span className="pageTitle">Search</span>
      <ThemeProvider theme={darkTheme}>
        <div className="tabs"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 5,
            marginBottom: 20,
          }}>
          
       {/* ============== search tabs component =========== */}
          <Tabs
            value={type}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, newValue) => {
              setType(newValue);
              setResultsPage(1);
            }}
            aria-label="Search Tabs"
          >
            {/* movie selection  tab   */}
            <Tab style={{ width: '25%' }} label="Movies" aria-label="Search Movies" />
            {/* tv selection tab */}
            <Tab style={{ width: '25%' }} label="TV Series" aria-label="Search TV Series" />
            {/* cast selection tab */}
            {/* <Tab style={{ width: '25%' }} label="Actor"  aria-label="Search Actors"/> */}
            {/* genre selection tab */}
            {/* <Tab style={{ width: '25%' }} label="Genre" aria-label="Search Genres"/> */}
          </Tabs>
        </div>

      {/*=========== search box component ================ */}
        <div className="search"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '30px 0',
            paddingRight: '10px',
          }} >
      {/* ========= search text field component =========   */}
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={((e) => setSearchText(e.target.value))}
          />
      {/* ========= search button component =============   */}
          <Button
            variant="contained"
            style={{
              marginLeft: 10,
              color: 'secondary',
            }}
          onClick={ fetchSearch()}>
      {/* =========== search icon component =============== */}
            <SearchIcon />
          </Button>
        </div>
      </ThemeProvider>
      <div className="trending">
        {content &&
          content.map((c) => (
            <MovieCard
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              mediaType={type ? "tv" : "movie"}
              voteAverage={c.vote_average}
            />
          ))}
        {searchText &&
          !content && (
          <h2>No Results Found</h2>
          )}
     {/* ==================== Pagination Component ============ */}
          <BasicPagination setResultsPage={setResultsPage} numberOfPages={numberOfPages} />
             
      </div>
    </div>
  );
};
    
                
        


export default Search;
          



