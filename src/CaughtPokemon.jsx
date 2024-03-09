import React, { useState } from "react";

function CaughtPokemon() {
  const [caughtPokemon, setCaughtPokemon] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function catchPokemon() {
    if (!pokemonNameInput) {
      return;
    }

    setCaughtPokemon(caughtPokemon.concat(pokemonNameInput));
    setPokemonNameInput("");
  }

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caughtPokemon.map(pokemon => (
          <li key={pokemon}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
}

export default CaughtPokemon;
