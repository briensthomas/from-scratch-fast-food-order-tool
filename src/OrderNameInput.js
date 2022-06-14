import React from 'react';

export default function OrderNameInput({ setOrderName }) {
  return (
    <div className='order-details'>
        Who is this order for?  
      <input onChange={(e) => setOrderName(e.target.value)} />
    </div>
  );
}
