import { React, useState, useEffect } from "react";
import { fetchMovieData } from "../apis/swapi";
import "../styles/MovieDetails.css";

const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState({});
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState({});

  const movieSectionDetails = [
    {
      title: "Characters",
      sectionClassName: "movie-characters",
    },
    {
      title: "Planets",
      sectionClassName: "movie-planets",
    },
    {
      title: "Species",
      sectionClassName: "movie-species",
    },
    {
      title: "Starships",
      sectionClassName: "movie-starships",
    },
    {
      title: "Vehicles",
      sectionClassName: "movie-vehicles",
    },
  ];

  useEffect(() => {
    async function getMovieData() {
      const movieData = await fetchMovieData(parseInt(movieId));
      setMovie(movieData.movie);
      setCharacters(movieData.characters);
      setPlanets(movieData.planets);
      setSpecies(movieData.species);
      setStarships(movieData.starships);
      setVehicles(movieData.vehicles);
    }
    getMovieData();
  }, []);

  const toggleDetails = (index) => {
    setActiveIndex(index);
    setShow(!show);
  };

  const getSection = (index) => {
    if (index === 0) {
      return characters;
    }
    if (index === 1) {
      return planets;
    }
    if (index === 2) {
      return species;
    }
    if (index === 3) {
      return starships;
    }
    if (index === 4) {
      return vehicles;
    }
  };

  const renderedDetails = movieSectionDetails.map((section, index) => {
    const active = index === activeIndex ? (show ? "active" : "") : "";
    const renderSection = getSection(index);

    return (
      <section key={index} className={section.sectionClassName}>
        <h2 onClick={() => toggleDetails(index)}>{section.title}</h2>
        <ul className={`content ${active}`}>{renderSection}</ul>
      </section>
    );
  });

  return (
    <div className='movie-details'>
      <section className='movie-details-title'>
        <h1 className='movie-data-text'>{movie.title}</h1>
      </section>
      <section className='movie-info'>
        <h2>Info</h2>
        <h6>Directed By: {movie.director}</h6>
        <h6>Produced By: {movie.producer}</h6>
        <h6>Release Date: {movie.release_date}</h6>
      </section>
      <section className='movie-description'>
        <h2>Description</h2>
        <p>{movie.opening_crawl}</p>
      </section>
      {renderedDetails}
    </div>
  );
};

export default MovieDetails;
