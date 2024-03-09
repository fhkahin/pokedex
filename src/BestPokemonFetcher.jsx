import React, { useEffect, useState } from "react";
import BestPokemon from "./BestPokemon"; // Import BestPokemon component

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

export default BestPokemonFetcher;
