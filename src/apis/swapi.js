import axios from "axios";
import DetailsCard from "../components/DetailsCard";

export default axios.create({
  baseURL: "https://swapi.dev/api/",
  params: {},
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

  const onDetailClick = async (url) => {
    const details = await axios.get(url);
    console.log(details.data);
  };

  //   const movieTitleURL = movie.data.title.replace(/\s+/g, "-").toLowerCase();

  const renderedCharactersList = characters.map((character) => {
    const characterNameURL = character.data.name
      .replace(/\s+/g, "-")
      .toLowerCase();

    const characterImgSrc = `/images/characters/${characterNameURL}.jpeg`;

    return (
      <li
        key={character.data.name}
        className='movie-data-character'
        onClick={() => onDetailClick(character.data.url)}
      >
        <DetailsCard name={character.data.name} imgSrc={characterImgSrc} />
      </li>
    );
  });

  const renderedPlanetsList = planets.map((planet) => {
    const planetNameURL = planet.data.name.replace(/\s+/g, "-").toLowerCase();

    const planetImgSrc = `/images/planets/${planetNameURL}.jpeg`;

    return (
      <li
        key={planet.data.name}
        className='movie-data-planet'
        onClick={() => onDetailClick(planet.data.url)}
      >
        <DetailsCard name={planet.data.name} imgSrc={planetImgSrc} />
      </li>
    );
  });

  const renderedSpeciesList = species.map((species) => {
    const speciesNameURL = species.data.name.replace(/\s+/g, "-").toLowerCase();

    const speciesImgSrc = `/images/species/${speciesNameURL}.jpeg`;

    return (
      <li
        key={species.data.name}
        className='movie-data-species'
        onClick={() => onDetailClick(species.data.url)}
      >
        <DetailsCard name={species.data.name} imgSrc={speciesImgSrc} />
      </li>
    );
  });

  const renderedStarshipsList = starships.map((starship) => {
    const starshipNameURL = starship.data.name
      .replace(/\s+/g, "-")
      .toLowerCase();

    const starshipImgSrc = `/images/starships/${starshipNameURL}.jpeg`;

    return (
      <li
        key={starship.data.name}
        className='movie-data-starship'
        onClick={() => onDetailClick(starship.data.url)}
      >
        <DetailsCard name={starship.data.name} imgSrc={starshipImgSrc} />
      </li>
    );
  });

  const renderedVehiclesList = vehicles.map((vehicle) => {
    const vehicleNameURL = vehicle.data.name
      .replace(/[\s+/]/g, "-")
      .toLowerCase();

    const vehicleImgSrc = `/images/vehicles/${vehicleNameURL}.jpeg`;

    return (
      <li
        key={vehicle.data.name}
        className='movie-data-vehicle'
        onClick={() => onDetailClick(vehicle.data.url)}
      >
        <DetailsCard name={vehicle.data.name} imgSrc={vehicleImgSrc} />
      </li>
    );
  });

  return {
    movie: movie.data,
    characters: renderedCharactersList,
    planets: renderedPlanetsList,
    species: renderedSpeciesList,
    starships: renderedStarshipsList,
    vehicles: renderedVehiclesList,
  };
};
