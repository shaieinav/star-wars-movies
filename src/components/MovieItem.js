import React from 'react';
import LikeButton from './LikeButton';

const MovieItem = ({ movie }) => {
    return (
        <article id={movie.episode_id} className="movie">
            {/* <img className="movie-poster" src={starwarsPoster} alt=""></img> */}
            <header className="movie-header">
                <h1>{movie.title}</h1>
                <h6>{movie.release_date}</h6>
                <h6>{movie.director}</h6>
                <h6>{movie.producer}</h6>
            </header>
            {/* <p>{movie.opening_crawl}</p> */}
            <footer className="like-button-footer">
                <LikeButton id={movie.episode_id} />
            </footer>
        </article>
    );
};

export default MovieItem;