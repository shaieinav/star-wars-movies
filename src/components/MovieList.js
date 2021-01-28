import { React, useState, useEffect } from 'react';
import swapi from '../apis/swapi';
import MovieItem from './MovieItem';
import '../styles/MovieList.css';

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

    return ( 
        <section className="movie-list">
            {renderedList}
        </section>
    );
};

export default MovieList;