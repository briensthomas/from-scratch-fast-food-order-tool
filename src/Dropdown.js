import React from 'react';
import DropdownList from './DropdownList.js';

export default function Dropdown({ setFood, setDessert, setDrink }) {
  return (
    <div>
      <DropdownList
        label='Food: '
        setItem={setFood}
        options={[
          { value: 'kobe-roll', displayText: 'Kobe Roll (Yama Sushi)' },
          { value: 'white-curry', displayText: 'White Curry with Brisket Burnt Ends (Eem)' },
          { value: 'herring-kachka', displayText: 'Herring Under a Fur Coat (Kachka)' } 
        ]}
      />
      <DropdownList
        label='Dessert: '
        setItem={setDessert}
        options={[
          { value: 'rice-pudding', displayText: 'Rice Pudding' },
          { value: 'apple-pie', displayText: 'Apple Pie' },
          { value: 'tiramisu', displayText: 'Tiramisu' } 
        ]}
      />
      <DropdownList
        label='Drink: '
        setItem={setDrink}
        options={[
          { value: 'thai-tea', displayText: 'Thai Tea' },
          { value: 'macchiato', displayText: 'Macchiato' },
          { value: 'float', displayText: 'Mt. Everest Special Float' } 
        ]}
      />
    </div>
  );
}