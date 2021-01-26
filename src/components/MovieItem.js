import React from 'react';

const MovieItem = ({ movie }) => {
    return (
        <div>
            <h1>{movie.title}</h1>
            <h6>{movie.release_date} - {movie.director}</h6>
            <p>{movie.opening_crawl}</p>
        </div>
    );
};

export default MovieItem;