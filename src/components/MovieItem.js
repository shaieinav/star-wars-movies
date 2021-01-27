import React from 'react';
// import starwarsPoster from '../starwars.jpeg';

const MovieItem = ({ movie }) => {
    return (
        <article className="movie">
            {/* <img className="movie-poster" src={starwarsPoster} alt=""></img> */}
            <header className="movie-header">
                <h1>{movie.title}</h1>
                <h6>{movie.release_date}</h6>
                <h6>{movie.director}</h6>
                <h6>{movie.producer}</h6>
            </header>
            {/* <p>{movie.opening_crawl}</p> */}
        </article>
    );
};

export default MovieItem;