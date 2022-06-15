import React from 'react';

export default function DropdownList({ setItem, label, options }) {
  return (
    <label> {label}
      <select onChange={(e) => setItem(e.target.value)}>
        {
          options.map((option, i) => <option value={option.value} 
            key={option.value + i}> {option.displayText}</option>)
        }
      </select>
    </label>
  );
}
