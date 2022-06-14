import './App.css';
import { useState } from 'react';
import FoodDropdown from './FoodDropdown.js';
import DessertDropdown from './DessertDropdown.js';
import DrinkDropdown from './DrinkDropdown.js';
import DisplayOrder from './DisplayOrder.js';

function App() {

  const [food, setFood] = useState('sushi');
  const [dessert, setDessert] = useState('Apple Pie');
  const [drink, setDrink] = useState('Thai Iced Tea');

  const [instructions, setInstructions] = useState([]);
  const [InstructionForm, setInstructionForm] = useState('');

  const [orderName, setOrderName] = useState('');

  return (
    <div className="App">
      <h3>Create Order Section</h3>
      <section>
        Dropdown Section
        <FoodDropdown setFood={setFood} />
        <DessertDropdown setDessert={setDessert} />
        <DrinkDropdown setDrink={setDrink} />
      </section>

      <hr />
      <section>

        <h3>Display Order Section</h3>
        <DisplayOrder 
          orderName={orderName}
          food={food} 
          dessert={dessert}
          drink={drink}
          instructions={instructions} />
      </section>
    </div>
  );
}

export default App;
