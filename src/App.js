import './App.css';
import { useState } from 'react';

import Dropdown from './Dropdown.js';
import OrderNameInput from './OrderNameInput.js';
import InstructionForm from './InstructionForm';
import InstructionsList from './InstructionsList.js';
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
    setInstructionForm('');
  }

  return (
    <div className="App">
      <OrderNameInput setOrderName={setOrderName} />
      <section className='create-order'>
        <Dropdown setFood={setFood}
          setDessert={setDessert}
          setDrink={setDrink} />
        <div className='instruction-form'>

          <InstructionForm 
            handleSubmit={handleSubmit}
            setInstructionForm={setInstructionForm}
            instructionForm={instructionForm} />
        </div>
      </section>

      <hr />

      <DisplayOrder 
        orderName={orderName}
        food={food} 
        dessert={dessert}
        drink={drink} />

      <InstructionsList instructions={instructions} />
    </div>
  );
}

export default App;
