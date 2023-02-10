import { Chip } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";


const Genres = ({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setResultsPage,
}) => {

    // add change handler for chip (add genre)
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setResultsPage(1);
    };

    //add change handler for chip (remove genre)
    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)       
        );
        setGenres([...genres, genre]);
        setResultsPage(1);
    };

    // Fetching Genres
    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=5a89cc49b8ba1aac42aba5e9e0f14705&language=en-US`
        );
        setGenres(data.genres);
    };    
    
    useEffect(() => {
        window.scroll(0, 0);
        fetchGenres();
              return () => {
             // setGenres({}); //resets the genres to an empty object a.k.a. unmounted
              }
        // eslint-disable-next-line
    }, []);

console.log('genres array = ',genres);

    return (
        <div style={{ padding: '6px 0' }}>
            {selectedGenres && selectedGenres.map((genre) => (
                <Chip
                    label={genre.name}
                    style={{
                        margin: 2,
                        // backgroundColor: 'whitesmoke',
                    }}
                    size='small'
                    key={genre.id}
                    clickable
                    onDelete={() => handleRemove(genre)}
                    color='secondary'
                />
            ))}
          
            {genres && genres.map((genre) => (
                <Chip
                    label={genre.name}
                    style={{
                        margin: 2,
                        backgroundColor: 'whitesmoke',
                    }}
                    
                    size='small'
                    key={genre.id}
                    clickable
                    onClick={() => handleAdd(genre)}    
                />
            ))}
        </div>
    );
}

export default Genres
