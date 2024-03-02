// BestPokemon component
function BestPokemon() {
    const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
    return (
      <div>
        <p>Best Pokemon: Mewtwo</p>
        <ul>
          {abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </ul>
      </div>
    );
  }

  
  export default BestPokemon