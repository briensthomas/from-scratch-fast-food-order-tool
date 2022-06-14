import './App.css';
import { useState } from 'react';
import FoodDropdown from './FoodDropdown.js';
import DessertDropdown from './DessertDropdown.js';
import DrinkDropdown from './DrinkDropdown.js';
import DisplayOrder from './DisplayOrder.js';

function App() {

  const [food, setFood] = useState('kobe-roll');
  const [dessert, setDessert] = useState('rice-pudding');
  const [drink, setDrink] = useState('thai-tea');

  const [instructions, setInstructions] = useState([]);
  const [InstructionForm, setInstructionForm] = useState('');

  const [orderName, setOrderName] = useState('');

  return (
    <div className="App">
      <h3>Create Order Section</h3>
      <section className='create-order'>
        Dropdown Section
        <FoodDropdown setFood={setFood} />
        <DessertDropdown setDessert={setDessert} />
        <DrinkDropdown setDrink={setDrink} />
      </section>

      <hr />

      <DisplayOrder 
        orderName={orderName}
        food={food} 
        dessert={dessert}
        drink={drink}
        instructions={instructions} />

    </div>
  );
}

export default App;
