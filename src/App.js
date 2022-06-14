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
  const [instructionForm, setInstructionForm] = useState('');

  const [orderName, setOrderName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionForm]);
  }

  return (
    <div className="App">
      <OrderNameInput setOrderName={setOrderName} />
      <section className='create-order'>
        <Dropdown setFood={setFood}
          setDessert={setDessert}
          setDrink={setDrink} />
        <InstructionForm 
          handleSubmit={handleSubmit}
          setInstructionForm={setInstructionForm}
          instructionForm={instructionForm} />
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
