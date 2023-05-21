import React from 'react'
import { useState } from 'react';

function Prueba() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <button onClick={handleClick} onKeyPress={handleKeyPress}>
      hola
    </button>
  );

}



export default Prueba