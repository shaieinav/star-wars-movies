import React from 'react';
import LikeButton from './LikeButton';
import '../styles/MovieItem.css';

const MovieItem = ({ movie }) => {

    function onMovieClick() {
        const movies = document.querySelectorAll('.movie');
        movies[(movie.episode_id + 2) % 6].classList.toggle('movie-clicked');
    }

    return (
        <article id={movie.episode_id} className="movie" onClick={onMovieClick}>
            <header className="movie-header">
                <h1>{movie.title} ({movie.release_date.substring(0, 4)})</h1>
                <h6>Directed By: {movie.director}</h6>
                <h6>Produced By: {movie.producer}</h6>
            </header>
            <h6 className="opening-crawl">{movie.opening_crawl}</h6>
            <footer className="like-button-footer">
                <LikeButton id={movie.episode_id} />
            </footer>
        </article>
    );
};

export default MovieItem;