import { React, useState, useEffect } from 'react';
// import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import swapi from '../apis/swapi';
import MovieItem from './MovieItem';
// import Home from './Home';

const MovieList = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const response = await swapi.get('/films');
            setMovies(response.data.results);
        }
        fetchMovies();
    }, [setMovies]);

    const renderedList = movies.map((movie) => {
        // const movieTitle = movie.title.replace(/\s+/g, '-').toLowerCase();
        return (
            // <Link to={'/movies/' + movieTitle} >
                <MovieItem key={movie.episode_id} movie={movie} />
            // </Link>
        );
    });

    return ( 
        <section className="movie-list">
            {/* <Router> */}
                {renderedList}
            {/* </Router> */}

            {/* <Switch>
                <Route exact path='/movies/1'>
                    <Home />
                </Route>
                <Route path='/movies/2'>
                    <Home />
                </Route>
            </Switch> */}
        </section>
    );
};

export default MovieList;