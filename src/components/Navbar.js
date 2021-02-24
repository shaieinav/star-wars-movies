import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MovieList from "./MovieList";
import LogoSVG from "../assets/svgs/LogoSVG";
import SpaceStationMoonSVG from "../assets/svgs/SpaceStationMoonSVG";
import StarfighterSVG from "../assets/svgs/StarfighterSVG";
import GithubSVG from "../assets/svgs/GithubSVG";
import ANewHope from "./movie_components/ANewHope";
import TheEmpireStrikesBack from "./movie_components/TheEmpireStrikesBack";
import ReturnOfTheJedi from "./movie_components/ReturnOfTheJedi";
import ThePhantomMenace from "./movie_components/ThePhantomMenace";
import AttackOfTheClones from "./movie_components/AttackOfTheClones";
import RevengeOfTheSith from "./movie_components/RevengeOfTheSith";
import "../styles/Navbar.css";

const Navbar = () => {
  function onStarFighterClick() {
    const starFighterIcon = document.querySelector(".star-fighter-icon");
    const movieNavLinks = document.querySelectorAll(".movie-nav-link");

    starFighterIcon.classList.toggle("rotate");

    movieNavLinks.forEach((movieNavLink) => {
      movieNavLink.classList.toggle("show");
    });
  }

  return (
    <section className='nav'>
      <Router>
        <nav className='navbar'>
          <ul className='navbar-nav'>
            <li className='logo'>
              <Link to='/' className='nav-link'>
                <span className='link-text logo-text'>Star Wars</span>
                <LogoSVG />
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                <SpaceStationMoonSVG />
                <span className='link-text'>Home</span>
              </Link>
            </li>
            <li className='nav-item' onClick={onStarFighterClick}>
              <Link to='/movies' className='nav-link'>
                <StarfighterSVG />
                <span className='link-text'>Movies</span>
              </Link>
            </li>
            <li className='nav-item movie-nav-link hidden'>
              <Link to='/movies/a-new-hope' className='nav-link'>
                <StarfighterSVG />
                <span className='link-text'>A New Hope</span>
              </Link>
            </li>
            <li className='nav-item movie-nav-link hidden'>
              <Link to='/movies/the-empire-strikes-back' className='nav-link'>
                <StarfighterSVG />
                <span className='link-text'>The Empire Strikes Back</span>
              </Link>
            </li>
            <li className='nav-item movie-nav-link hidden'>
              <Link to='/movies/return-of-the-jedi' className='nav-link'>
                <StarfighterSVG />
                <span className='link-text'>Return Of The Jedi</span>
              </Link>
            </li>
            <li className='nav-item movie-nav-link hidden'>
              <Link to='/movies/the-phantom-menace' className='nav-link'>
                <StarfighterSVG />
                <span className='link-text'>The Phantom Menace</span>
              </Link>
            </li>
            <li className='nav-item movie-nav-link hidden'>
              <Link to='/movies/attack-of-the-clones' className='nav-link'>
                <StarfighterSVG />
                <span className='link-text'>Attack Of The Clones</span>
              </Link>
            </li>
            <li className='nav-item movie-nav-link hidden'>
              <Link to='/movies/revenge-of-the-sith' className='nav-link'>
                <StarfighterSVG />
                <span className='link-text'>Revenge Of The Sith</span>
              </Link>
            </li>
            <li className='nav-item'>
              <a
                href='https://github.com/shaieinav/star-wars-movies'
                target='_blank'
                rel='noreferrer'
                className='nav-link'
              >
                <GithubSVG />
                <span className='link-text'>Github</span>
              </a>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/movies' component={MovieList} />
          <Route exact path='/movies/a-new-hope' component={ANewHope} />
          <Route
            exact
            path='/movies/the-empire-strikes-back'
            component={TheEmpireStrikesBack}
          />
          <Route
            exact
            path='/movies/return-of-the-jedi'
            component={ReturnOfTheJedi}
          />
          <Route
            exact
            path='/movies/the-phantom-menace'
            component={ThePhantomMenace}
          />
          <Route
            exact
            path='/movies/attack-of-the-clones'
            component={AttackOfTheClones}
          />
          <Route
            exact
            path='/movies/revenge-of-the-sith'
            component={RevengeOfTheSith}
          />
        </Switch>
      </Router>
    </section>
  );
};

export default Navbar;
