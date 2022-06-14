import React from 'react';

export default function FoodDropdown({ setFood }) {
  return (
    <div>FoodDropdown
      <select onChange={(e) => setFood(e.target.value)}>
        <option value='white-curry'>White Curry with Brisket Burnt Ends (Eem)</option>
        <option value='herring-kachka'>Herring Under a Fur Coat (Kachka)</option>
        <option value='kobe-roll'>Kobe Roll (Yama Sushi)</option>
      </select>
    </div>
  );
}
