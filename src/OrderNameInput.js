import React from 'react';

export default function OrderNameInput({ setOrderName }) {
  return (
    <div>
        Who is this order for?  
      <input onChange={(e) => setOrderName(e.target.value)} />
    </div>
  );
}
