import React from 'react';

export default function DisplayOrder({ orderName, food, dessert, drink, instructions }) {
  return (
    <div className='display-order'>
      <div className='order-name'>
        <h3> Order for: {`${orderName}`} </h3>
      </div>
      <div className='order-images'>
        <img src={`./${food}.png`} />
        <img src={`./${dessert}.png`} />
        <img src={`./${drink}.png`} />
      </div>
    </div>
  );
}
