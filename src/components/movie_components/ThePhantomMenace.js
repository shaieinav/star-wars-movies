import { React, useState, useEffect } from 'react';
import { fetchMovieData } from '../../apis/swapi';
import '../../styles/MovieDetails.css';

const ThePhantomMenace = () => {
    
    const [movie, setMovie] = useState({});
    const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [species, setSpecies] = useState([]);
    const [starships, setStarships] = useState([]);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        async function getMovieData() {
            const movieData = await fetchMovieData(4);
            setMovie(movieData.movie);
            setCharacters(movieData.characters);
            setPlanets(movieData.planets);
            setSpecies(movieData.species);
            setStarships(movieData.starships);
            setVehicles(movieData.vehicles);
        }
        getMovieData();
    }, []);

    return (
        <div>
            <h6 className="movie-data-text">Directed By: {movie.director}</h6>
            <h1 className="movie-data-text">{movie.title}</h1>
            <h6 className="movie-data-text">Produced By: {movie.producer}</h6>
            <h6 className="movie-data-text">Release Date: {movie.release_date}</h6>
            <h2 className="movie-data-text">Description</h2>
            <p className="movie-data-text">{movie.opening_crawl}</p>
            <h2 className="movie-data-text">Characters</h2>
            <ul>
                {characters}
            </ul>
            <h2 className="movie-data-text">Planets</h2>
            <ul>
                {planets}
            </ul>
            <h2 className="movie-data-text">Species</h2>
            <ul>
                {species}
            </ul>
            <h2 className="movie-data-text">Starships</h2>
            <ul>
                {starships}
            </ul>
            <h2 className="movie-data-text">Vehicles</h2>
            <ul>
                {vehicles}
            </ul>
        </div>
    );
};

export default ThePhantomMenace;