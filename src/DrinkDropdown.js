import React from 'react';

export default function DrinkDropdown({ setDrink }) {
  return (
    <div>DrinkDropdown
      <label> Drink
        <select onChange={(e) => setDrink(e.target.value)}>
          <option value="thai-tea">Thai Tea</option>
          <option value="macchiato">Macchiato</option>
          <option value="float">Mt. Everest Special Float (Rootbeer Float)</option>
        </select>
      </label>
    </div>
  );
}
