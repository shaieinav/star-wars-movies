import axios from 'axios';

export default axios.create({
    baseURL: 'https://swapi.dev/api/',
    params: {

    }
});

export const fetchMovieData = async (id) => {

    const movie = await axios.get(`https://swapi.dev/api/films/${id}`);

    const characters = await Promise.all(
        movie.data.characters.map((url) => axios.get(url))
    );

    const planets = await Promise.all(
        movie.data.planets.map((url) => axios.get(url))
    );

    const species = await Promise.all(
        movie.data.species.map((url) => axios.get(url))
    );

    const starships = await Promise.all(
        movie.data.starships.map((url) => axios.get(url))
    );

    const vehicles = await Promise.all(
        movie.data.vehicles.map((url) => axios.get(url))
    );

    const renderedCharactersList = characters.map((character) => {
        return <li key={character.data.name} className="movie-data-text">{character.data.name}</li>;
    });

    const renderedPlanetsList = planets.map((planet) => {
        return <li key={planet.data.name} className="movie-data-text">{planet.data.name}</li>;
    });

    const renderedSpeciesList = species.map((species) => {
        return <li key={species.data.name} className="movie-data-text">{species.data.name}</li>;
    });

    const renderedStarshipsList = starships.map((starship) => {
        return <li key={starship.data.name} className="movie-data-text">{starship.data.name}</li>;
    });

    const renderedVehiclesList = vehicles.map((vehicle) => {
        return <li key={vehicle.data.name} className="movie-data-text">{vehicle.data.name}</li>;
    });

    return {
        movie: movie.data,
        characters: renderedCharactersList,
        planets: renderedPlanetsList,
        species: renderedSpeciesList,
        starships: renderedStarshipsList,
        vehicles: renderedVehiclesList,
    };
}