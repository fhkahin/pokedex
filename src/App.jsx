import React, { useState } from 'react';
import Logo from './Logo.jsx';
import BestPokemonSelector from './BestPokemonSelector.jsx'; 
import PokemonMoves from "./PokemonMoves";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  const [caughtPokemon, setCaughtPokemon] = useState([]);

  const handleCatchPokemon = (pokemonName) => {
    setCaughtPokemon([...caughtPokemon, pokemonName]);
  };

  return (
    <div>
      <Logo appName="Fathi" handleLogoClick={handleCatchPokemon} />
      <BestPokemonSelector /> {handleBestPokemonSelector}
      <PokemonMoves /> {handlePokemonMoves}
      <CaughtPokemon caughtPokemon={caughtPokemon} />
    </div>
  );
}

export default App;
