import React from 'react';
import Instruction from './Instruction.js';

export default function InstructionsList({ instructions }) {
  return (
    <div>
      {
        instructions.map((instruction, i) => <Instruction key={instruction + i} 
          instruction={instruction}/>)
      }
    </div>
  );
}
