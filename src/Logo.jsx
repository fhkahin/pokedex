import React from 'react';
import imageurl from './assets/Pokemon-Logo-PNG-Pic.png';

function Logo({ appName, handleLogoClick }) {
  const handleClick = () => {
    handleLogoClick('Pikachu'); // You can choose any default Pokemon name here
  };

  return (
    <header>
      <div>
        <h1>{appName}</h1>
      </div>
      <img className='image' src={imageurl} alt="Pokemon Logo" onClick={handleClick} />
    </header>
  );
}

export default Logo;
