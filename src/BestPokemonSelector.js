mport React, { useEffect, useState } from "react";

function BestPokemonSelector() {
  const [pokemonId, setPokemonId] = useState(null);

  function handleBulbasaurClick() {
    setPokemonId(1);
  }
  function handleCharmanderClick() {
    setPokemonId(4);
  }

  return (
    <div>
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      {pokemonId ? <BestPokemonFetcher pokemonId={pokemonId} /> : null}
    </div>
  );
}

function BestPokemonFetcher(props) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data);
      });
  }, [props.pokemonId]);

  if (!pokemon) {
    return null;
  } else {
    return <BestPokemon pokemon={pokemon} />;
  }
}

function BestPokemon(props) {
  return (
    <div>
      <p>{props.pokemon.name}</p>
      <ul>
        {props.pokemon.abilities.map(ability => {
          return <li>{ability.ability.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default BestPokemonSelector;