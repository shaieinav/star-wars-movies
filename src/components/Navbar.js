import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MovieList from "./MovieList";
import LogoSVG from '../svgs/LogoSVG';
import SpaceStationMoonSVG from '../svgs/SpaceStationMoonSVG';
import StarfighterSVG from '../svgs/StarfighterSVG';
import SpaceshipSVG from '../svgs/SpaceshipSVG';

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
                            <Link to='/movies' className="nav-link">
                                <SpaceshipSVG />
                                <span className="link-text">Movies2</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/movies' className="nav-link">
                                <SpaceshipSVG />
                                <span className="link-text">Github</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/movies'>
                        <MovieList />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Navbar;