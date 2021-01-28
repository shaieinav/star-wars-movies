import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MovieList from "./MovieList";
import LogoSVG from '../assets/svgs/LogoSVG';
import SpaceStationMoonSVG from '../assets/svgs/SpaceStationMoonSVG';
import StarfighterSVG from '../assets/svgs/StarfighterSVG';
import GithubSVG from '../assets/svgs/GithubSVG';

const Navbar = () => {
    return (
        <div className="nav">
            <Router>
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li className="logo">
                            <Link to='/' className="nav-link">
                                <span className="link-text logo-text">Star Wars</span>
                                <LogoSVG />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link">
                                <SpaceStationMoonSVG />
                                <span className="link-text">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/movies' className="nav-link">
                                <StarfighterSVG />
                                <span className="link-text">Movies</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                href='https://github.com/shaieinav/star-wars-movies'
                                target='_blank'
                                rel='noreferrer'
                                className="nav-link"
                            >
                                <GithubSVG />
                                <span className="link-text">Github</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/movies' component={MovieList} />
                </Switch>
            </Router>
        </div>
    );
};

export default Navbar;