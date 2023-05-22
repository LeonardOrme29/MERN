import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../estilos/colores.css';
import { color } from '../features/colorFrame/colorFrameSlice';

const colors = [
  { id: 'Natural', class: 'Natural' },
  { id: 'Blanco', class: 'Blanco' },
  { id: 'Beige', class: 'Beige' },
  { id: 'Dorado', class: 'Dorado' },
  { id: 'Rojo', class: 'Rojo' },
  { id: 'Gris', class: 'Gris' },
  { id: 'Marron', class: 'Marron' },
  { id: 'Negro', class: 'Negro' },
];

function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState(null);
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(color({
      color:selectedColor
    }))
  }, [selectedColor])
  
  function handleColorChange(e) {
    setSelectedColor(e.target.value);
  }

  return (
      <div className='colorsBox'>
      {colors.map((color) => (
        <div key={color.id} className="colorOption">
          <input
            type="radio"
            name="color"
            id={color.id}
            value={color.id}
            onChange={handleColorChange}
            checked={selectedColor === color.id}
          />
          <label htmlFor={color.id}>
            <span className={color.class}></span>
          </label>
          <p>{color.id}</p>
        </div>
      ))}
      </div>
  );
}

export default ColorSelector;