import React from 'react';

export default function FoodDropdown({ setFood }) {
  return (
    <div>
      <label>Food: 
        <select onChange={(e) => setFood(e.target.value)}>
          <option value='kobe-roll'>Kobe Roll (Yama Sushi)</option>
          <option value='white-curry'>White Curry with Brisket Burnt Ends (Eem)</option>
          <option value='herring-kachka'>Herring Under a Fur Coat (Kachka)</option>
        </select>
      </label>
    </div>
  );
}
