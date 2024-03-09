import React, { useEffect, useState } from "react";

function BestPokemonFetcher() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data);
      });
  }, []);

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

export default BestPokemonFetcher;