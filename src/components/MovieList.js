import { React, useState, useEffect } from 'react';
import swapi from '../apis/swapi';
import MovieItem from './MovieItem';

const MovieList = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const response = await swapi.get('/films');
            setMovies(response.data.results);
        }
        fetchMovies();
    }, [setMovies]);

    const renderedList = movies.map((movie) => {
        return (
            <MovieItem key={movie.episode_id} movie={movie} />
        );
    });

    return <div className="">{renderedList}</div>;
};

export default MovieList;