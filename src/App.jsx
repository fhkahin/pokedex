import React from 'react';


// BestPokemon component
function BestPokemon() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  return (
    <div>
      <p>Best Pokemon:</p>
      <ul>
        {abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
}

// CaughtPokemon component
function CaughtPokemon() {
  const date = new Date().toLocaleDateString();
  return (
    <p>Caught 0 Pokemon on {date}</p>
  );
}

// App component
function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

export default App;
