import './App.css';
import { useState } from 'react';

import Dropdown from './Dropdown.js';
import OrderNameInput from './OrderNameInput.js';

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
      <OrderNameInput setOrderName={setOrderName} />

      <section className='create-order'>
        <Dropdown setFood={setFood}
          setDessert={setDessert}
          setDrink={setDrink} />
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
