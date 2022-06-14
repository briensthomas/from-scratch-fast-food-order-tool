import React from 'react';

export default function DessertDropdown({ setDessert }) {
  return (
    <div>DessertDropdown
      <label> Dessert: 
        <select onChange={(e) => setDessert(e.target.value)}>
          <option value="rice-pudding">Rice Pudding</option>
          <option value="apple-pie">Apple Pie</option>
          <option value="tiramisu">Tiramisu</option>
        </select>
      </label>
    </div>
  );
}
