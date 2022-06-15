import React from 'react';

export default function InstructionForm({ handleSubmit, setInstructionForm, instructionForm }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>Add Instructions: 
        <textarea value={instructionForm} onChange={(e) => setInstructionForm(e.target.value)} />
      </label>
      <button>Submit</button>
    </form>
  );
}
