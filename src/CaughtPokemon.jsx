import React from 'react';

function CaughtPokemon({ caughtPokemon }) {
  const date = new Date().toLocaleDateString();
  return (
    <div>
      <p>Caught {caughtPokemon.length} Pokemon on {date}</p>
      <ul>
        {caughtPokemon.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
}

export default CaughtPokemon;
