import React from 'react';

export default function DisplayOrder({ orderName, food, dessert, drink, instructions }) {
  return (
    <div>DisplayOrder
      <h3> {`${orderName}`} </h3>
      <img src={`./${food}.png`} />
    </div>
  );
}
