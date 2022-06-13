import './App.css';
import { useState } from 'react';
import FoodDropdown from './FoodDropdown.js';
import SideDropdown from './SideDropdown.js';
import DrinkDropdown from './DrinkDropdown.js';
import DisplayOrder from './DisplayOrder.js';

function App() {

  const [food, setFood] = useState('sushi');
  const [side, setSide] = useState('Sweet Potato Fries');
  const [drink, setDrink] = useState('Thai Iced Tea');

  const [instructions, setInstructions] = useState([]);
  const [InstructionForm, setInstructionForm] = useState('');

  const [orderName, setOrderName] = useState('');

  return (
    <div className="App">
      <h3>Create Order Section</h3>
      <section>
        Dropdown Section
        <FoodDropdown />
        <SideDropdown />
        <DrinkDropdown />
      </section>

      <hr />
      <section>

        <h3>Display Order Section</h3>
        <DisplayOrder 
          orderName={orderName}
          food={food} 
          side={side}
          drink={drink}
          instructions={instructions} />
      </section>
    </div>
  );
}

export default App;
