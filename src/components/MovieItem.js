import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";
import "../styles/MovieItem.css";
import aNewHopmImg from "../assets/images/star-wars-a-new-hope.webp";
import theEmpireStrikesBackImg from "../assets/images/star-wars-the-empire-strikes-back.jpeg";
import returnOfTheJediImg from "../assets/images/star-wars-return-of-the-jedi.jpeg";
import thePhantomMenaceImg from "../assets/images/star-wars-the-phantom-menace.webp";
import attackOfTheClonesImg from "../assets/images/star-wars-attack-of-the-clones.webp";
import revengeOfTheSithImg from "../assets/images/star-wars-revenge-of-the-sith.jpeg";

const MovieItem = ({ movie, movieTitle }) => {
  function onMovieClick() {
    // const movies = document.querySelectorAll('.movie');
    // movies[(movie.episode_id + 2) % 6].classList.toggle('movie-clicked');
  }

  const getMovieImg = (movieId) => {
    if (movieId === 1) {
      return thePhantomMenaceImg;
    }
    if (movieId === 2) {
      return attackOfTheClonesImg;
    }
    if (movieId === 3) {
      return revengeOfTheSithImg;
    }
    if (movieId === 4) {
      return aNewHopmImg;
    }
    if (movieId === 5) {
      return theEmpireStrikesBackImg;
    }
    if (movieId === 6) {
      return returnOfTheJediImg;
    }
  };

  return (
    <article id={movie.episode_id} className='movie' onClick={onMovieClick}>
      <header className='movie-header'>
        <img
          src={getMovieImg(movie.episode_id)}
          alt='star wars movie'
          className='movie-img'
        ></img>
      </header>
      <footer className='footer'>
        <Link className='movie-title' to={"/movies/" + movieTitle}>
          <h1>
            {movie.title} ({movie.release_date.substring(0, 4)})
          </h1>
        </Link>
        <LikeButton id={movie.episode_id} />
      </footer>
    </article>
  );
};

export default MovieItem;
