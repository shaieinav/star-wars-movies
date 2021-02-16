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
    }, []);

    const renderedMoviesList = movies.map((movie) => {
        const movieTitle = movie.title.replace(/\s+/g, '-').toLowerCase();
        return (
            <MovieItem key={movie.episode_id} movie={movie} movieTitle={movieTitle} />
        );
    });

    return (
        <section className="movie-list">
            {renderedMoviesList}
        </section>
    );
};

export default MovieList;