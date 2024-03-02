import React, { useState } from 'react';
import Logo from './Logo.jsx';
import BestPokemon from './BestPokemon.jsx';
import CaughtPokemon from './CaughtPokemon.jsx';

function App() {
  const [caughtPokemon, setCaughtPokemon] = useState([]);

  const handleCatchPokemon = (pokemonName) => {
    setCaughtPokemon([...caughtPokemon, pokemonName]);
  };

  return (
    <div>
      <Logo appName="Fathi" handleLogoClick={handleCatchPokemon} />
      <BestPokemon />
      <CaughtPokemon caughtPokemon={caughtPokemon} />
    </div>
  );
}

export default App;
