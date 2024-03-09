import React, { useState } from 'react';
import Logo from './Logo.jsx';
import BestPokemon from './BestPokemonFetcher.jsx';
import CaughtPokemon from './CaughtPokemon.jsx';
import PokemonMoves from "./PokemonMoves";
import BestPokemonSelector from "./BestPokemonSelector";


function App() {
  const [caughtPokemon, setCaughtPokemon] = useState([]);

  const handleCatchPokemon = (pokemonName) => {
    setCaughtPokemon([...caughtPokemon, pokemonName]);
  };

  return (
    <div>
      <Logo appName="Fathi" handleLogoClick={handleCatchPokemon} />
      <BestPokemonFetcher />
      <PokemonMoves />
      <CaughtPokemon caughtPokemon={caughtPokemon} />
    </div>
  );
}

export default App;
